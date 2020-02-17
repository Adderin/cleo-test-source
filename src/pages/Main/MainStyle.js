import styled from "styled-components";
import { variable, device } from '../../styles/index';

export const MainStyle = styled.div`
display: flex;
justify-content: space-between;
width: auto;
padding: 20px;
margin: 10px auto;
color: rgba(0, 0, 0, 0.87);
transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
background-color: #fff;
border-radius: 4px;
box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
  0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
&:hover {
  background: ${variable.colorPrimary};
  color: ${variable.colorWhite};
}
&.searchRepos:hover {
  background: inherit;
  color: inherit;
}
@media ${device.mobileL} {
  flex-direction: column;
}
`;