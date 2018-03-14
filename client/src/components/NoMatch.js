import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const NoMatch = () => (
  <div>
    <Header as="h3" textAlign="center">
      So sorry, we cant find your page. Click 
      <Link to="/">   Here</Link> to return home.
    </Header>
    <img src="http://49.media.tumblr.com/c0811a4cbc503e9511f3006bc06a0d92/tumblr_nhxilyD6Lk1t37guro1_500.gif" />
  </div>
)

export default NoMatch;