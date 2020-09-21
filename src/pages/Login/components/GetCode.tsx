import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Typography, Form } from 'antd';
import { Rule } from 'antd/lib/form';
import { State } from 'redux/ducks/reducers';
import { updateUser } from 'redux/ducks/user';
import { networkErrorNotification } from 'components/ErrorTranslation';
import { isGmailAddress } from 'helpers/validators';
import { verify } from 'helpers/api';
import { FormWrapper, StyledInput, StyledButton } from './styles';
const { Title } = Typography;

type Props = {
  onSubmit: () => void;
};
function GetCode({ onSubmit }: Props) {
  const { email } = useSelector((state: State) => state.user, shallowEqual);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const normalizeEmail = (value: string) => value.trim();
  const emailRules: Rule[] = [
    { required: true, message: t('emailRequired') },
    { type: 'email', message: t('emailInvalid') },
    () => ({
      validator(_, value) {
        if (isGmailAddress(value)) {
          return Promise.resolve();
        }
        return Promise.reject(t('emailNotGmail'));
      }
    })
  ];

  const handleFinish = async ({ email }: { email: string }) => {
    try {
      setIsLoading(true);
      await verify(email);
      dispatch(updateUser({ email }));
      onSubmit();
    } catch (error) {
      networkErrorNotification(error.message);
      setIsLoading(false);
    }
  };

  return (
    <FormWrapper>
      <Title level={4}>{t('login')}</Title>
      <Form initialValues={{ email }} onFinish={handleFinish} requiredMark={false}>
        <Form.Item
          label={t('email')}
          name="email"
          normalize={normalizeEmail}
          rules={emailRules}
          validateFirst
        >
          <StyledInput placeholder={t('emailExample')} disabled={isLoading} />
        </Form.Item>
        <Form.Item>
          <StyledButton type="primary" htmlType="submit" loading={isLoading} block>
            {t('getCode')}
          </StyledButton>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
}

export default GetCode;
