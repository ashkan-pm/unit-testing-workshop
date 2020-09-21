import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button } from 'antd';
import { VerifyWrapper, StyledOTPInput } from './styles';
const { Title } = Typography;

type Props = {
  onBack: () => void;
};
function Verify({ onBack }: Props) {
  const { t } = useTranslation();

  return (
    <VerifyWrapper>
      <Title level={4}>{t('proveIt')}</Title>
      <StyledOTPInput />
      <div>
        <Button onClick={onBack}>{t('goBack')}</Button>
        <Button type="primary">{t('verify')}</Button>
      </div>
    </VerifyWrapper>
  );
}

export default Verify;
