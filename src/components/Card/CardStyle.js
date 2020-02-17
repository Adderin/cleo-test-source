import styled from "styled-components";
import { variable } from '../../styles/index';

export const CardStyle = styled.div`
position: relative;
margin: 0 auto 50px;
display: flex;
flex-direction: column;
width: 100%;
background-color: ${variable.colorWhite};
border-radius: 2px;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
  0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;

export const CardImageStyle = styled.div`
position: relative;
display: flex;
background: ${variable.colorPrimary};
flex-direction: column;
align-items: center;
padding: 10px 15px;
`;

export const CardImgStyle = styled.img`
display: block;
border-radius: 50%;
position: relative;
left: 0;
right: 0;
top: 0;
bottom: 0;
width: 120px;
height: 120px;
`;

export const CardContentStyle = styled.div`
  padding: 24px;
  border-radius: 0 0 2px 2px;
`;

export const CardNameStyle = styled.div`
  bottom: 10px;
  left: 10px;
  max-width: 100%;
  padding: 13px;

  color: ${variable.colorWhite};

  font-size: 24px;
  font-weight: 300;
`;

export const CardActiveStyle = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
`;