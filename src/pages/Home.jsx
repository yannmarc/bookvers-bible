import React, { Fragment } from 'react';
import { Header, Testimonial, Features, Navbar } from '../components/ui';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Features />
      <Testimonial />
    </Fragment>
  )
}

export default Home