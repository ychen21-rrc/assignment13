import React from 'react';
import styled from 'styled-components';
import type { ImgProps } from './Img.types';

const StyledImg = styled.img<{ $disabled?: boolean }>`
  max-width: 100%;
  height: auto;
  filter: ${({ $disabled }) => ($disabled ? 'grayscale(1) contrast(0.7)' : 'none')};
`;

export const Img: React.FC<ImgProps> = ({ disabled, ...rest }) => {
  return <StyledImg $disabled={disabled} {...rest} />;
};
