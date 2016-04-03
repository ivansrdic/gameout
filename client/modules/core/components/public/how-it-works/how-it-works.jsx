import React from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

const HowItWorks = ({content = () => null }) => (
  <Grid>
    <video autoPlay loop muted poster="landing-page.png" id="background">
      <source src="landing-page.mp4" type="video/mp4" />
    </video>
    <Row>
      <Col md={12}>
        <Panel id="howitworksPanel">
          <h1 className="text-center">How it works</h1>
          <br/>
          <p>Gameout is based on the "gamification" principle which is used for motivating people to perform daily workouts for the purpose of a healthier lifestyle.
            <br/>
            <br/>
            Gameout will help you acquire these habits in a fun way through custom tasks. If you are more experienced and are looking for a challenge, we will give you one.
            When you sign in for the first time, you will be asked to enter information about your sports habits. According to the entered data, the app will adjust exercise programs that are recommended. In addition, you will be able to enter your own exercises and the app will store and later show them in recommended workouts.
            To start using the app, all you have to do is follow a few simple steps.
            <br/>
            <br/>
            First you have to sign up – you can do this by using your Facebook/Google+ account, or simply by entering your email and password.
            The next step is setting up your profile. Tell us about your daily habits, some personal dana and create your own character. Creating your character is a fun step because there are a lot of customizations and you can really make it unique.
            <br/>
            <br/>
            Let the games begin!
            <br/>
            <br/>
            Each week you will get a series of workouts based on your physical possibilities and preferences. Every workout is a quest. By completing these quests you gain experience and gold. Experience makes you level up and unlock new content. You can buy new items for your character using gold. But watch out! If you miss a workout, your character loses health. You can team up with you friends to complete harder quests. These quests are separate and follow a story. But they still require you to work!
            <br/>
            <br/>
            You will fight, you will sweat, but you WILL succeed. Good luck!
            </p>
        </Panel>
      </Col>
    </Row>
  </Grid>
);

export default HowItWorks;