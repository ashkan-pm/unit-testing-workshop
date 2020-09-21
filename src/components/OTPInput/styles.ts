import styled from 'styled-components';
import { Input } from 'antd';

export const StyledInput = styled(Input)`
  width: 40px;
  padding: 4px;
  font-size: 24px;
  text-align: center;
  color: transparent;
  text-shadow: 0 0 0 ${({ value }) => (value ? 'rgba(255, 255, 255, 0.85)' : '#666666')};

  & + & {
    margin-left: 8px;
  }
`;
