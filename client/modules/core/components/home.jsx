import React from 'react';

const Home = ({content = () => null }) => (
  <div>
    <p>Welcome to Gameout</p>
    {content()}
  </div>
);

export default Home;