import React from 'react';
import styled from 'styled-components';
import type { LabelProps } from './Label.types';

const StyledLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  display: block;
  margin-bottom: 0.25rem;
`;

export const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>;
};
