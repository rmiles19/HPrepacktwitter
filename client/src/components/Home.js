import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const Home = () => (
  <div>
   <Header textAlign="center" as="h3">Welcome to <Link to="./posts">Harry Potter ⚡ Twitter!</Link></Header>
   <img src = "https://images.pottermore.com/bxd3o8b291gf/3hollgS5QIcaUmoAWMsMEC/0ab7c45e0842488acdce82a76f6a7123/Hogwarts_PM_B4C37M1_GreatHallMourningCedricsDeath_Moment.jpg?w=1200" />
   </div>
)

export default Home;