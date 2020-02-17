import styled from 'styled-components';
import { variable, device } from '../../../styles/index';

export const ButtonStyle = styled.button`
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  outline: 0;
  text-decoration: none;
  color: #fff;
  text-align: center;
  letter-spacing: 0.5px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background: ${props => (props.disabled ? variable.colorGreyLight : variable.colorPrimary)};
  pointer-events: ${props => (props.disabled ? "none" : "all")};
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);

    @media ${device.mobileL} {
      margin-bottom: 20px;
    }
`;
