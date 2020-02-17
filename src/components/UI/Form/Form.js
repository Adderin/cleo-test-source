import React from 'react';

import {FormStyle} from './FormStyle';

export const Form = props => {
  return (
    <FormStyle onSubmit={event => props.submit(event)}>
    {props.children}
    </FormStyle>
  );
}