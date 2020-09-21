import styled from 'styled-components';
import { Input, Button } from 'antd';
import OTPInput from 'components/OTPInput';

export const StyledInput = styled(Input)`
  width: 260px;
`;

export const StyledButton = styled(Button)`
  margin-top: 8px;
`;

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

export const StyledOTPInput = styled(OTPInput)`
  margin-bottom: 28px;
`;
