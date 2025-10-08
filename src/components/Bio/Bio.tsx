import React from "react";
import "./Bio.css";
import { BioProps } from "./Bio.types";

import { Typography, Col } from "antd";

export const Bio: React.FC<BioProps> = ({ jobTitle, text, className = "" }) => {
  return (
    <Col className={className}>
      <Typography.Title className="bio-title">{jobTitle}</Typography.Title>
      <Typography.Text color="bio-text" >{text}</Typography.Text>
    </Col>
  );
};
