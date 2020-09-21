import styled from 'styled-components';
import { Input, Button } from 'antd';

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const StyledInput = styled(Input)`
  width: 260px;
`;

export const StyledButton = styled(Button)`
  margin-top: 8px;
`;
