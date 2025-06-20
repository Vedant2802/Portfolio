import React from "react";
import { staticText } from "../constants/constants";

function Contact() {
  const {
    header: { contact },
  } = staticText;
  return <div>{contact}</div>;
}

export default Contact;
