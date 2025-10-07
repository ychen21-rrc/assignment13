import React from 'react';
import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ $disabled?: boolean }>`
  padding: 0.6rem 1rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  background: ${({$disabled}) => $disabled ? '#cccccc' : '#f2f2f2'};
  cursor: ${({$disabled}) => $disabled ? 'not-allowed' : 'pointer'};
  pointer-events: ${({$disabled}) => $disabled ? 'none' : 'auto'};
  transition: background 150ms ease;
  &:hover { background: ${({$disabled}) => $disabled ? '#cccccc' : '#e6e6e6'}; }
  width: fit-content;
`;

export const Button: React.FC<ButtonProps> = ({ disabled, children, ...rest }) => {
  return (
    <StyledButton aria-disabled={disabled} $disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};
