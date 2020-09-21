import styled from 'styled-components';
import { Form } from 'antd';

export const StyledFormItem = styled(Form.Item)<{ $value: string }>`
  input {
    width: 40px;
    padding: 4px;
    font-size: 24px;
    text-align: center;
    color: transparent;
    text-shadow: 0 0 0 ${({ $value }) => ($value ? 'rgba(255, 255, 255, 0.85)' : '#666666')};
  }

  & + & {
    margin-left: 8px;
  }
`;
