import React from "react";
import "./Bio.css";
import { BioProps } from "./Bio.types";

export const Bio: React.FC<BioProps> = ({ jobTitle, text, className = "" }) => {
  return (
    <div className={className}>
      <h1>{jobTitle}</h1>

      <svg
  fill="#000000"
  width="1200px"  
  height="800px"
  viewBox="0 0 240 24" 
  xmlns="http://www.w3.org/2000/svg"
  className="split_bar"
>
<path
    fill-rule="evenodd"
    d="M2 12.75a.75.75 0 01.75-.75h236.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" 
  />
</svg>
      <p className="bio_text">{text}</p>
    </div>
  );
};
