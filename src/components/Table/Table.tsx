import React from 'react';
import styled from 'styled-components';
import type { TableProps } from './Table.types';

const T = styled.table<{ $disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${({$disabled}) => $disabled ? 0.6 : 1};
`;
const Th = styled.th` text-align: left; padding: 8px; border-bottom: 1px solid #eee; `;
const Td = styled.td` padding: 8px; border-bottom: 1px solid #f4f4f4; `;
const Tr = styled.tr``;
const Tfoot = styled.tfoot` font-weight: 600; `;

export const Table: React.FC<TableProps> = ({ disabled, children, ...rest }) => (
  <T $disabled={disabled} {...rest}>{children}</T>
);

export const TableHeader: React.FC<React.HTMLAttributes<HTMLTableCellElement>> = ({ children, ...rest }) => (
  <thead><Tr><Th {...rest}>{children}</Th></Tr></thead>
);

export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ children, ...rest }) => (
  <Tr {...rest}>{children}</Tr>
);

export const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = ({ children, ...rest }) => (
  <Td {...rest}>{children}</Td>
);

export const TableFooter: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ children, ...rest }) => (
  <Tfoot {...rest}><tr><td>{children}</td></tr></Tfoot>
);
