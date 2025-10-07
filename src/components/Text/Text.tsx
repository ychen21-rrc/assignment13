import React from 'react';
import styled from 'styled-components';
import type { TextProps } from './Text.types';

const StyledInput = styled.input<{ $disabled?: boolean }>`
  padding: 0.5rem 0.75rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  background: ${({$disabled}) => $disabled ? '#f0f0f0' : 'white'};
  pointer-events: ${({$disabled}) => $disabled ? 'none' : 'auto'};
`;

export const Text: React.FC<TextProps> = ({ disabled, ...rest }) => {
  return <StyledInput $disabled={disabled} disabled={disabled} {...rest} />;
};
