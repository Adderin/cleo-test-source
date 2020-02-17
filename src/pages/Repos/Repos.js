import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  createRef
} from 'react';

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";

import { sortByName, sortByStars } from "../../shared/utils";

import { UserReposStyle, SortByRateStyle } from "./ReposStyle";
import { MainStyle } from "../../pages/Main/MainStyle";

import {Input} from "../../components/UI/Input/Input"
import { ReposLink } from "../../components/ReposLink/ReposLink";

const ref = createRef();

export const Repos = () => {

  const dispatch = useDispatch();

  const checkBox = useRef(null);

  const login = useSelector(state => {
    if (state.user.user) {
      return state.user.user.login;
    }
  });

  const onInitRepos = useCallback(
    (login, event) => {
      dispatch(actions.initRepos(login));
    },
    [dispatch]
  );

  useEffect(() => {
    onInitRepos(login);
  }, [login, onInitRepos]);

  const repos = useSelector(state => {
    if (state.repos.repos) {
      return state.repos.repos;
    }
  });

  const error = useSelector(state => {
    return state.repos.error;
  });

  const [reposToDisplay, setReposToDisplay] = useState(null);

  useEffect(() => {
    setReposToDisplay(repos);
  }, [repos]);

  const onFindRepo = inputVal => {
    checkBox.current.checked
      ? setReposToDisplay(sortByStars(sortByName(repos, inputVal)))
      : setReposToDisplay(sortByName(repos, inputVal));
  };

  const onSortByStars = event => {
    if (checkBox.current.checked) {
      setReposToDisplay(sortByStars(reposToDisplay));
    }
  };

  let repoBlock;

  reposToDisplay
    ? (repoBlock = (
        <div>
          {reposToDisplay.map(element => {
            return (
              <ReposLink
                key={element.id}
                title={element.name}
                href={element.html_url}
                stars={element.stargazers_count}
              />
            );
          })}
        </div>
      ))
    : (repoBlock = <MainStyle>{error}</MainStyle>);

  return (
    <UserReposStyle>
    <MainStyle className="searchRepos">
      <Input
        type="text"
        placeholder="Find repo..."
        changed={onFindRepo}  
        ref={ref}  
      />
      <SortByRateStyle>
        <label htmlFor="checkbox">Sort by rate</label>
        <input
          type="checkbox"
          label="stars rating"
          onChange={onSortByStars} 
          ref={checkBox} 
          id="checkbox"
        />
      </SortByRateStyle>
    </MainStyle>
    {repoBlock}
  </UserReposStyle>
  );
}

