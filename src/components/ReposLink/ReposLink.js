import React from "react";

import { ReposLinkStyle } from "./ReposLinkStyle";
import { MainStyle } from "../../pages/Main/MainStyle";

export const ReposLink = props => {
  return (
    <MainStyle>     
      <ReposLinkStyle href={props.href}>{props.title}</ReposLinkStyle>
        <span>Rate {props.stars}</span>
    </MainStyle>
  );
};
