import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import learn from '../../public/logo/learn.png'
import '../../src/app.css'

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Us">Democratizing Education</Header>
    <Container center={center}>
      <h1>Learnify is the trusted platform for education. <br/> </h1>
      <img src={learn} alt="People learning together"/>
      <h4 className='abt-txt'>
      Founded by engineers in Austin, Texas, Learnify is home to more <br /> 
      than 20 million learners, the majority of top-ranked universities in the world and industry-leading companies. <br /> <br />
      As a global nonprofit, Learnify is transforming traditional education, removing the barriers of cost, location and access. <br /> 
      Fulfilling the demand for people to learn on their own terms, Learnify is reimagining the possibilities of education. <br /><br /> 
      Supporting learners at every stage, whether entering the job market, changing fields, seeking a promotion or exploring<br />
      new interests, Learnify delivers courses for curious minds on topics ranging from data and computer science to leadership and communications. <br /><br />
      Learnify is where you go to learn.
      </h4>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
