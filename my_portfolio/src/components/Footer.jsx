import React from "react";
import { staticText } from "../constants/constants";
import { config } from "../constants/config";

const Footer = () => {
  const {
    footer: { linkedin },
  } = staticText;

  const linkedinLink = config.LINKEDIN_URL;

  return (
    <footer
      id="footer"
      className="h-15 bg-gray-400 bottom-0 w-full fixed flex justify-center items-center gap-3"
    >
      <a
        href={linkedinLink}
        className="text-xl font-bold hover:bg-amber-100 border-2 border-gray-900 rounded-lg p-1"
      >
        {linkedin}
      </a>
    </footer>
  );
};

export default Footer;
