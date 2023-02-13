import React from "react";
import Button from "../Button";
// import * as Icons from 'react-bootstrap-icons';
import yourData from "../../data/portfolio.json";
import Image from "next/image";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
