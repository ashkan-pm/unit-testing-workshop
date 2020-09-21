import React, { useEffect, useState, useRef } from 'react';
import { Input } from 'antd';
import { StyledFormItem } from './styles';

type Props = {
  values: string[];
  disabled?: boolean;
  error?: boolean;
  onChange: (values: string[]) => void;
  onFocus: () => void;
  onSubmit: (value: string) => void;
};
function OTPInput({ values, disabled, error, onChange, onFocus, onSubmit }: Props) {
  const [activeInput, setActiveInput] = useState(0);
  const focusList = useRef(Array(values.length).fill(null));

  useEffect(() => {
    if (focusList.current[activeInput]) {
      focusList.current[activeInput].focus();
    } else {
      focusList.current.forEach((input) => {
        input.blur();
      });
    }
  }, [activeInput]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedValues = [...values];
    updatedValues[index] = event.currentTarget.value;
    onChange(updatedValues);

    const emptyIndex = updatedValues.indexOf('');
    if (activeInput === values.length - 1 || emptyIndex === -1) {
      setActiveInput(emptyIndex);
      if (emptyIndex === -1) onSubmit(updatedValues.join(''));

      return;
    }

    setActiveInput(activeInput + 1);
  };

  return (
    <div>
      {values.map((value, index) => (
        <StyledFormItem key={index} validateStatus={error ? 'error' : ''} $value={value}>
          <Input
            value={value}
            onChange={(event) => {
              handleChange(event, index);
            }}
            onFocus={(event) => {
              onFocus();
              setActiveInput(index);
              event.target.select();
            }}
            onBlur={() => {
              setActiveInput(-1);
            }}
            ref={(el) => {
              focusList.current[index] = el;
            }}
            placeholder="-"
            maxLength={1}
            disabled={disabled}
          />
        </StyledFormItem>
      ))}
    </div>
  );
}

export default OTPInput;
