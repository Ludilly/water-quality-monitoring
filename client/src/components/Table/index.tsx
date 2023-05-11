import React from 'react'
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination
} from '@material-ui/core';
import EmptyTable from './EmptyTable';
import CustomColumns from './CustomColumn';

type Column = {
  id: string;
  label: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  minWidth?: number;
  cell: (row: any) => React.ReactNode;
};

type Row = {
  id: string;
  [key: string]: any;
};

type Props = {
  isLoading: boolean;
  rows: Row[];
  columns: Column[];
  order: 'asc' | 'desc';
  page: number;
  orderBy: string;
  totalItems: number;
  allowOrderOptions: string[];
  rowsPerPageOptions: number[];
  handleSort: (columnId: string) => void;
  setPage: (page: number) => void;
  rowsPerPage: number;
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomTable = ({
  isLoading,
  rows,
  columns,
  order,
  page,
  orderBy,
  totalItems,
  allowOrderOptions,
  rowsPerPageOptions,
  handleSort,
  setPage,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}: Props) => {
  // if (isLoading) return <Loading />;

  if (!rows.length) return <EmptyTable />;

  return (
    <Box>
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <CustomColumns
                    key={column.id}
                    column={column}
                    handleSort={handleSort}
                    orderBy={orderBy}
                    order={order}
                    allowOrderOptions={allowOrderOptions}
                  />
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow hover key={row.id}>
                  {columns.map((column) => column.cell(row))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage='Linhas por pág.'
          backIconButtonProps={{
            'aria-label': 'Próxima página',
          }}
          nextIconButtonProps={{
            'aria-label': 'Página Anterior',
          }}
        />
      </Paper>
    </Box>
  );
};

export default CustomTable;
