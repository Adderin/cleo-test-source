import React, { useState, createRef } from 'react';

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";

import {MainStyle} from './MainStyle';

import {Button} from '../../components/UI/Button/Button';
import {Form} from '../../components/UI/Form/Form';
import {Input} from '../../components/UI/Input/Input';
import {Loader} from '../../components/UI/Loader/Loader';
import {Card} from '../../components/Card/Card'

const ref = createRef();

export const Main = props => {
  const dispatch = useDispatch();

  const onInitUser = event => {
    event.preventDefault();
    dispatch(actions.initUser(searchUser));
    ref.current.value = "";
  };

  const [searchUser, setSearchUser] = useState(null);

  const onInsertUser = inputVal => {
    setSearchUser(inputVal);
  };

  const user = useSelector(state => {
    return state.user.user;
  });

  const error = useSelector(state => {
    return state.user.error;
  });

  const loading = useSelector(state => {
    return state.user.loading;
  });

  let isDisabled = false;

  if (!searchUser) {
    isDisabled = true;
  }

  let infoBlock;

  user
    ? (infoBlock = <Card login={user.login} bio={user.bio} img={user.img} />)
    : (infoBlock = null);

  if (error) {
    infoBlock = <MainStyle>{error}</MainStyle>;
  }

  if (loading) {
    infoBlock = <Loader />;
  }
  return (
    <>
        <Form submit = {event => onInitUser(event)}>         
        <Input 
            type = "text"
            placeholder = "Enter GitHub profile"
            changed={onInsertUser}
            ref={ref}
        />
        <Button title = "Find User" clicked = {onInitUser} disabled = {isDisabled} />
        </Form>
        {infoBlock}
    </>
  );
};

