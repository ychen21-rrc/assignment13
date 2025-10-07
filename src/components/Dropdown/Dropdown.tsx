import React from 'react';
import styled from 'styled-components';
import type { DropdownProps } from './Dropdown.types';

const Select = styled.select<{ $disabled?: boolean }>`
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: ${({$disabled}) => $disabled ? '#f0f0f0' : 'white'};
`;

export const Dropdown: React.FC<DropdownProps> = ({ options, disabled, onChange }) => {
  return (
    <Select $disabled={disabled} disabled={disabled} onChange={(e)=>onChange?.(e.target.value)}>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </Select>
  );
};
