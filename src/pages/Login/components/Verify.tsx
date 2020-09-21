import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button } from 'antd';
import OTPInput from 'components/OTPInput';
import { FormWrapper } from './styles';
const { Title } = Typography;

type Props = {
  onBack: () => void;
};
function Verify({ onBack }: Props) {
  const [values, setValues] = useState(Array(6).fill(''));
  const [isInvalid, setIsInvalid] = useState(false);
  const { t } = useTranslation();

  const handleChange = (values: string[]) => {
    setIsInvalid(false);
    setValues(values);
  };
  const handleFocus = () => {
    setIsInvalid(false);
  };
  const handleVerify = (value: string) => {
    if (value.length < 6) setIsInvalid(true);
    console.log(value);
  };

  return (
    <FormWrapper>
      <Title level={4}>{t('proveIt')}</Title>
      <OTPInput
        values={values}
        error={isInvalid}
        onChange={handleChange}
        onFocus={handleFocus}
        onSubmit={handleVerify}
      />
      <div>
        <Button onClick={onBack} tabIndex={1}>
          {t('goBack')}
        </Button>
        <Button
          type="primary"
          tabIndex={0}
          onClick={() => {
            handleVerify(values.join(''));
          }}
        >
          {t('verify')}
        </Button>
      </div>
    </FormWrapper>
  );
}

export default Verify;
