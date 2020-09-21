import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import OTPInput from 'components/OTPInput';
import { networkErrorNotification } from 'components/ErrorTranslation';
import { login } from 'helpers/api';
import { FormWrapper } from './styles';
const { Title } = Typography;

type Props = {
  onBack: () => void;
};
function Verify({ onBack }: Props) {
  const [values, setValues] = useState(Array(6).fill(''));
  const [isInvalid, setIsInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleChange = (values: string[]) => {
    setIsInvalid(false);
    setValues(values);
  };
  const handleFocus = () => {
    setIsInvalid(false);
  };
  const handleVerify = async (value: string) => {
    try {
      if (value.length < 6) {
        setIsInvalid(true);
        return;
      }

      setIsLoading(true);
      await login('unit@gmail.com', value);
      navigate('/');
    } catch (error) {
      networkErrorNotification(error.message);
      setIsLoading(false);
    }
  };

  return (
    <FormWrapper>
      <Title level={4}>{t('proveIt')}</Title>
      <OTPInput
        values={values}
        error={isInvalid}
        disabled={isLoading}
        onChange={handleChange}
        onFocus={handleFocus}
        onSubmit={handleVerify}
      />
      <div>
        <Button onClick={onBack} tabIndex={1} disabled={isLoading}>
          {t('goBack')}
        </Button>
        <Button
          type="primary"
          tabIndex={0}
          onClick={() => {
            handleVerify(values.join(''));
          }}
          loading={isLoading}
        >
          {t('verify')}
        </Button>
      </div>
    </FormWrapper>
  );
}

export default Verify;
