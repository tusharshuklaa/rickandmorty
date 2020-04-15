import React from 'react';
import { NextPage } from 'next';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <h1>Hi, I'm Tushar Shukla 😎</h1>
);

export default Home;