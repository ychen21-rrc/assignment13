import React from 'react';
import styled from 'styled-components';
import type { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

export const RadioButton: React.FC<RadioButtonProps> = ({ name, value, label, disabled }) => {
  return (
    <Wrapper $disabled={disabled}>
      <input type="radio" name={name} value={value} disabled={disabled} />
      <span>{label ?? value}</span>
    </Wrapper>
  );
};
