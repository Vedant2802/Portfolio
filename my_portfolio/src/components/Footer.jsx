import React from "react";
import { staticText } from "../constants/constants";
import { config } from "../constants/config";

const Footer = () => {
  const {
    footer: { linkedin, github },
  } = staticText;

  const linkedinLink = config.LINKEDIN_URL;
  const githubLink = config.GITHUB_URL;
  console.log(githubLink);

  return (
    <footer
      id="footer"
      className="h-15 bg-gray-400 bottom-0 w-full fixed flex justify-center items-center gap-3"
    >
      <a
        href={linkedinLink}
        className="text-xl font-light hover:bg-gray-100 border-2 border-transparent rounded-lg p-1 cursor-pointer"
      >
        {linkedin}
      </a>
      <a
        href={githubLink}
        className="text-xl font-light hover:bg-gray-100 border-2 border-transparent rounded-lg p-1 cursor-pointer "
      >
        {github}
      </a>
    </footer>
  );
};

export default Footer;
