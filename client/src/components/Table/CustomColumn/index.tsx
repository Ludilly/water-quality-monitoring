import React from 'react';
import { TableCell, TableSortLabel } from '@material-ui/core';

type Column = {
  id: string;
  label: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  minWidth?: number;
};

type Props = {
  column: Column;
  handleSort: (columnId: string) => void;
  orderBy: string;
  order: 'asc' | 'desc';
  allowOrderOptions: string[];
};

const CustomColumns = ({ column, handleSort, orderBy, order, allowOrderOptions }: Props) => {
  return (
    <TableCell
      key={column.id}
      align={column.align ?? 'left'}
      style={{
        minWidth: column.minWidth ?? 50,
      }}
    >
      {allowOrderOptions.includes(column.id) ? (
        <TableSortLabel
          active={orderBy === column.id}
          direction={orderBy === column.id ? order : 'asc'}
          onClick={() => handleSort(column.id)}
        >
          {column.label}
        </TableSortLabel>
      ) : (
        column.label
      )}
    </TableCell>
  );
};

export default CustomColumns;
