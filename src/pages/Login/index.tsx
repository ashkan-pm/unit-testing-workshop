import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Form } from 'antd';
import { Rule } from 'antd/lib/form';
import { StyledInput, StyledButton } from './styles';
const { Title } = Typography;

function isGmailAddress(email: string) {
  if (/@gmail\.com$/.test(email)) return true;
  return false;
}

function Login() {
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

  return (
    <>
      <Title level={4}>{t('login')}</Title>
      <Form requiredMark={false}>
        <Form.Item
          label={t('email')}
          name="email"
          normalize={normalizeEmail}
          rules={emailRules}
          validateFirst
        >
          <StyledInput placeholder={t('emailExample')} />
        </Form.Item>
        <Form.Item>
          <StyledButton type="primary" htmlType="submit" block>
            {t('getCode')}
          </StyledButton>
        </Form.Item>
      </Form>
    </>
  );
}

export default Login;
