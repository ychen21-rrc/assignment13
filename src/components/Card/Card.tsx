import React from 'react';
import styled from 'styled-components';
import type { CardProps } from './Card.types';

const StyledCard = styled.div<{ $disabled?: boolean }>`
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  padding: 16px;
  background: ${({ $disabled }) => ($disabled ? '#fafafa' : 'white')};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const Card: React.FC<CardProps> = ({ disabled, children, ...rest }) => {
  return (
    <StyledCard $disabled={disabled} {...rest}>
      {children}
    </StyledCard>
  );
};
