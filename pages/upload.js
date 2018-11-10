import React from 'react'
const { Card, CardTitle, CardText, CardActions, Button } = 'react-md'


export default () => (
  <div>
    <div className="md-grid">
      <Card className="md-cell">
        <CardTitle title="Hello, World!" />
        <CardText>
          Lorem ipsum... pretend more ...
        </CardText>
        <CardActions>
          <Button flat label="Action 1" />
          <Button flat label="Action 2" />
        </CardActions>
      </Card>
    </div>
  </div>
);
