import React, { useEffect, useState, useRef } from 'react';
import { StyledInput } from './styles';

type Props = {
  className?: string;
  length: number;
  disabled?: boolean;
};
function OTPInput({ className, length, disabled }: Props) {
  const [values, setValues] = useState(Array(length).fill(''));
  const [activeInput, setActiveInput] = useState(0);
  const focusList = useRef(Array(length).fill(null));

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
    setValues(updatedValues);

    if (activeInput === length - 1 || updatedValues.indexOf('') === -1) {
      setActiveInput(updatedValues.indexOf(''));
      return;
    }

    setActiveInput(activeInput + 1);
  };

  return (
    <div className={className}>
      {values.map((value, index) => {
        return (
          <StyledInput
            key={index}
            value={value}
            onChange={(event) => {
              handleChange(event, index);
            }}
            onFocus={(event) => {
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
        );
      })}
    </div>
  );
}

export default OTPInput;
