import React from "react";
import "./Home.css";
import { HomeProps } from "./Home.types";
import { Bio } from "../../components/Bio/Bio";
import Me from "../../assets/CartoonMe.png";
import { IconLink } from '../../components/IconLink/IconLink'
import { Button, Col, Row } from "antd";
import LinkedInIcon from '../../assets/linkedin.svg'

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home_container">
      <Bio
        className="bio"
        jobTitle="Software Developer"
        text=" Recent computer science graduate from Omaha, NE, passionate about developing technology to improve lives. With experience from internships, research, and academics, I’m excited to bring my skills to your organization and collaborate with your team to achieve success and create a positive, thriving work environment."
      />
      <Col className="me_col">
        <img src={Me} alt="Ryan" className="profile_image" />
        <Row className="button_row">
          <Button className="resume_button">Download CV</Button>
          <IconLink svg={<LinkedInIcon/>} href="https://www.linkedin.com/in/ryanpmcmaster/"/>
        </Row>
      </Col>
    </div>
  );
};
