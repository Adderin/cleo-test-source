import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../UI/Button/Button';
import {
  CardStyle,
  CardImageStyle,
  CardContentStyle,
  CardNameStyle,
  CardImgStyle,
  CardActiveStyle,
} from './CardStyle';

export const Card = props => {
  return (
    <CardStyle>
      <CardImageStyle>
        <CardImgStyle src={props.img} alt="photo" />
        <CardNameStyle>{props.login}</CardNameStyle>
      </CardImageStyle>
      <CardContentStyle className="card-content">{props.bio}</CardContentStyle>
      <CardActiveStyle>
        <Link to={`/${props.login}`}>
          <Button title="show repos" />
        </Link>
      </CardActiveStyle>
    
    </CardStyle>
  );
};
