import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

function Register() {
  const { t } = useTranslation();
  return <Button>{t('testing')}</Button>;
}

export default Register;
