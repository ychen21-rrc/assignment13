import React from 'react';
import styled from 'styled-components';
import type { HeroImageProps } from './HeroImage.types';

const Wrapper = styled.section<{ $disabled?: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #f5f5f5;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Overlay = styled.div<{ $disabled?: boolean }>`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  text-align: center;
  background: ${({ $disabled }) =>
    $disabled
      ? 'rgba(0,0,0,0.25)'
      : 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.35))'};
  color: white;
  padding: 2rem;
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  heading,
  subheading,
  disabled,
}) => {
  return (
    <Wrapper $disabled={disabled}>
      <Image src={src} alt={alt} />
      <Overlay $disabled={disabled}>
        <div>
          {heading && <h2>{heading}</h2>}
          {subheading && <p>{subheading}</p>}
        </div>
      </Overlay>
    </Wrapper>
  );
};
