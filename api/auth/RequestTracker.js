/* eslint no-console:0, no-param-reassign:0 */

import { invokeApiGateway } from 'utils/aws';

const oneHour = 1000 * 60 * 60;

/**
 * Tracks requests made to AWS API gateway in window.trackedRequests
 *
 * @param {Object} trackerObj Object to track with. Leave this blank; arg only there for specs
 * @param {Object} makeRequest Function which places the request with. Leave this blank; arg only there for specs.
 *
 * @namespace RequestTracker
 * @exports RequestTracker
 */
export class RequestTracker {
  constructor (trackerObj = window.trackedRequests, makeRequest = invokeApiGateway) {
    this.trackerObj = window.trackedRequests = trackerObj || {};
    this.makeRequest = makeRequest;
  }

  /**
   * Makes and tracks request to AWS API Gateway
   *
   * @memberof   RequestTracker
   * @param      {Object}   opts         Request options object
   * @param      {string}   token        The user token
   * @param      {boolean}  returnError  Whether to return an error if request fails
   * @return     {Object}   Success promise (from invokeApiGateway) or error object, or null
   *                        if request fails and returnError is set to false
   */
  request(opts, token, returnError = false) {
    try {
      this._set(opts);
      return this.makeRequest(opts, token);
    } catch (error) {
      const errorObj = this._safelyUnset(opts, error);
      return returnError ? errorObj : null;
    }
  }

  /**
   * Makes and tracks request to AWS API Gateway, if the request has not already been made
   *
   * @memberof   RequestTracker
   * @param      {Object}   opts         Request options object
   * @param      {string}   token        The user token
   * @param      {boolean}  returnError  Whether to return an error if request fails
   * @return     {Object}   Success promise (from invokeApiGateway) or error object, or null
   *                        if request fails and returnError is set to false
   */
  requestIfHaventAlready(opts, token, returnError = false) {
    try {
      if (this._get(opts)) {
        return returnError ? { blocked: true } : null;
      } else {
        this._set(opts);
        return this.makeRequest(opts, token);
      }
    } catch (error) {
      const errorObj = this._safelyUnset(opts, error);
      return returnError ? errorObj : null;
    }
  }

  /**
   * Makes and tracks request to AWS API Gateway, if the request has not been made in the last `ms` milliseconds
   *
   * @memberof   RequestTracker
   * @param      {Object}   opts         Request options object
   * @param      {string}   token        The user token
   * @param      {number}   ms           Cutoff since previous request to allow for new request
   * @param      {boolean}  returnError  Whether to return an error if request fails
   * @return     {Object}   Success promise (from invokeApiGateway) or error object, or null
   *                        if request fails and returnError is set to false
   */
  requestIfHaventRecently(opts, token, ms = oneHour, returnError = false) {
    const request = () => {
      this._set(opts);
      return this.makeRequest(opts, token);
    };

    try {
      if (this._get(opts)) {
        const millisecondsSinceRequested = new Date().getTime() - new Date(this._get(opts)).getTime();
        if (millisecondsSinceRequested > ms) {
          return request();
        } else {
          return returnError ? { blocked: true } : null;
        }
      } else {
        return request();
      }
    } catch (error) {
      const errorObj = this._safelyUnset(opts, error);
      return returnError ? errorObj : null;
    }
  }

  // PRIVATE
  _key({ path, method = 'GET', queryParams }) {
    const queryString = queryParams && Object.keys(queryParams).length
      ? Object.keys(queryParams).reduce((array, k) => [...array, `${k}=${queryParams[k]}`], []).join('&')
      : null;

    return `${method.toUpperCase()}: ${path}${ queryString ? '?'.concat(queryString) : '' }`;
  }

  _get(opts) {
    return this.trackerObj[this._key(opts)];
  }

  _set(opts) {
    this.trackerObj[this._key(opts)] = new Date().toISOString();
  }

  _unset(opts) {
    delete this.trackerObj[this._key(opts)];
    return true;
  }

  _safelyUnset(opts, error) {
    try {
      this._unset(opts);
      return { error };
    } catch (error) {
      return { error, trackerError: `Failed to unset tracking record for given request: ${JSON.stringify(opts)}` };
    }
  }
}

const tracker = new RequestTracker();
export default tracker;
