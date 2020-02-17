import styled from 'styled-components';
import { device } from './index';

export const AppStyle = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  font-family: "Arial";
  @media ${device.mobileL} {
    max-width: 90%;
  }
`;