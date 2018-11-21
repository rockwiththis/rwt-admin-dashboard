import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';

import config from './config.js';
// import tracker from './RequestTracker.js';

const userPool = new CognitoUserPool({
  UserPoolId: config.cognito.USER_POOL_ID,
  ClientId: config.cognito.APP_CLIENT_ID
});

// HELPERS
// this is directly from the SDK
// https://www.npmjs.com/package/amazon-cognito-identity-js
export function signInUserSDK({ username, password }) {
  const authenticationData = {
    Username : username,
    Password : password,
  }
  const authenticationDetails = new AuthenticationDetails(authenticationData)
  const poolData = {
    UserPoolId : config.cognito.USER_POOL_ID, // Your user pool id here
    ClientId : config.cognito.APP_CLIENT_ID // Your client id here
  }
  const userPool = new CognitoUserPool(poolData)
  const userData = {
    Username : username,
    Pool : userPool
  }
  const cognitoUser = new CognitoUser(userData)
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      const accessToken = result.getAccessToken().getJwtToken()

      //POTENTIAL: Region needs to be set if not already set previously elsewhere.
      AWS.config.region = config.cognito.REGION

      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId : config.cognito.USER_POOL_ID, // your identity pool id here
        Logins : {
          // Change the key below according to the specific region your user pool is in.
          [`cognito-idp.${config.cognito.REGION}.amazonaws.com/${config.cognito.USER_POOL_ID}`] : result.getIdToken().getJwtToken()
        }
      })

      //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
      AWS.config.credentials.refresh((error) => {
          if (error) {
            console.error('credentials error', error)
          } else {
           // Instantiate aws sdk service objects now that the credentials have been updated.
           // example: var s3 = new AWS.S3()
           console.log('Successfully logged!')
          }
        })
      },
      newPasswordRequired: function(userAttributes, requiredAttributes) {
        // User was signed up by an admin and must provide new
        // password and required attributes, if any, to complete
        // authentication.

        userAttributes.name = username

        // the api doesn't accept this field back
        delete userAttributes.email_verified

        // unsure about this field, but I don't send this back
        delete userAttributes.phone_number_verified

        // Get these details and call
        cognitoUser.completeNewPasswordChallenge(password, userAttributes, this)
      },
      onFailure: function(err) {
        console.log(err.message || JSON.stringify(err))
      },
  })
}


export function checkIsLoggedIn() {
  const userPool = new CognitoUserPool({
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID
  })

  const cognitoUser = userPool.getCurrentUser()

  if (cognitoUser !== null) {
    return cognitoUser.getSession((err, res) => {
      if(err) {
        console.log('checkIsLoggedIn error ', err)
        throw err
      }
      if(res && res.isValid()) {
        return { user: res, loggedIn: res.isValid() }
      } else {
        return { user: res, loggedIn: false }
      }
    })
  } else {
    return { user: {}, loggedIn: false }
  }
}








// all functions below this were ripped from Red Shift and need some looking at

export function signUpNewUser({ username, email, password }) {
  const authenticationData = { Username: username, Password: password }
  const attributeList = []
  const dataEmail = {
    Name : 'email',
    Value : email
  }
  const attributeEmail = new CognitoUserAttribute(dataEmail)
  attributeList.push(attributeEmail)

  userPool.signUp('username', 'password', attributeList, null, function(err, result){
    if (err) {
      alert(err.message || JSON.stringify(err))
      return
    }
    cognitoUser = result.user
    console.log('user name is ' + cognitoUser.getUsername())
  });
}


/**
 * Signs in a user from authentication data, and returns a user token.
 *
 * @param      {string}   username  The username
 * @param      {string}   password  The password
 * @return     {Promise}  Promise resolving to user token
 */
export function createUserToken(username, password) {
  const authenticationData = { Username: username, Password: password };
  const user = new CognitoUser({ Username: username, Pool: userPool });
  const authenticationDetails = new AuthenticationDetails(authenticationData);

  return new Promise((resolve, reject) => (
    user.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log('> createUserToken SUCCESS', result)
        resolve(result.getAccessToken().getJwtToken())
      },
      onFailure: (err) => reject(err)
    })
  ));
}

/**
 * Gets user token from current authenticated user.
 *
 * @param      {Object}   currentUser  The current user
 * @return     {Promise}  Promise resolving to user token
 */
function getUserToken(currentUser) {
  return new Promise((resolve, reject) => {
    currentUser.getSession(function(err, session) {
      if (err) {
        reject(err);
        return;
      }
      resolve(session.getIdToken().getJwtToken());
    });
  });
}

// EXPORTED

/**
 * Attempts to grab current user from session and then fetch data for that
 * user. On failure passes errors to onError callback
 *
 * @param      {function}  onError  Callback run on error
 * @return     {Promise}   Promise which resolves to user data
 */
export async function getUserData(onError = (error) => { throw new Error(error); }) {
  const currentUser = userPool.getCurrentUser();
  if (!currentUser) return null;

  try {
    const token = await getUserToken(currentUser);
    // const response = await tracker.requestIfHaventAlready({
    //   path: `/current-user`
    // }, token);
    const response = null;

    return Object.assign(response || {}, { token });
  } catch (error) {
    if (onError) onError(error);
    return null;
  }
}

/**
 * Grabs current user from session and signs them out.
 * @param {Function} onSignOut Callback run on signout success
 */
export function signOut(onSignOut) {
  const currentUser = userPool.getCurrentUser();
  if (currentUser !== null) {
    currentUser.signOut();
  }

  if (typeof onSignOut === 'function') { onSignOut(); }
}

/**
 * Signs in a user from username and password
 *
 * @param      {string}    username   The username
 * @param      {string}    password   The password
 * @param      {Function}  onSuccess  Callback run on signin success
 */
export async function signIn({ username, password, onSuccess }) {
  try {
    await createUserToken(username, password);
    const data = await getUserData();
    if (onSuccess) { onSuccess(data); }
  }
  catch(error) {
    console.log('>>> signIn error: ', error)
  }
}

/**
 * Initiates a reset-password request
 *
 * @param      {string}   username  The username
 * @return     {Promise}  { description_of_the_return_value }
 */
export async function forgotPassword(username, onError, onVerify, onSuccess) {
  const params = {
    Pool: userPool,
    Username: username
  };

  const cognitoUser = new CognitoUser(params);

  cognitoUser.forgotPassword({
    onFailure: (err) => { onError && onError(err); },
    inputVerificationCode: (data) => { onVerify && onVerify(data); },
    onSuccess: (data) => { onSuccess && onSuccess(data); }
  });
}

/**
 * Resets a user's password using a verification code emailed to them.
 *
 * @param      {string}    username     The username
 * @param      {number}    code         The code
 * @param      {string}    newPassword  The new password
 * @param      {Function}  onError      On error
 * @param      {Function}  onSuccess    On success
 */
export function resetPassword(username, code, newPassword, onError, onSuccess) {
  const params = {
    Pool: userPool,
    Username: username
  };

  const cognitoUser = new CognitoUser(params);

  cognitoUser.confirmPassword(code, newPassword, {
    onSuccess: (data) => { onSuccess && onSuccess(data); },
    onFailure: (err) => { onError && onError(err); }
  });
}

/**
 *
 *
 * @returns {Object} Current cognito user
 */
export function getCurrentUser() {
  const userPool = new CognitoUserPool({
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID
  });
  return userPool.getCurrentUser();
}

/**
 * Gets access token from current authenticated user.
 *
 * @param      {Object}   currentUser  The current user
 * @return     {Promise}  Promise resolving to access token
 */
export function getAccessToken(currentUser) {
  const cu = currentUser || getCurrentUser();
  return new Promise((resolve, reject) => {
    cu.getSession(function(err, session) {
      if (err) {
        reject(err);
        return;
      }
      resolve(session.getAccessToken().getJwtToken());
    });
  });
}
