import { ChangeEvent, useState } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
import StatusTag from '../StatusTag';
import { AgentsLimitsUnits, AgentsNames } from '../../enums';
import Loading from '../Loading';
import EmptyTable from './EmptyTable';
import { formatValueToUnit } from '../../helpers';
import { Column, Row } from '../../interfaces';

interface CustomTableProps {
  columns: Column[];
  rows?: Row[];
  onSelectedRows?: (rows: Array<any>) => void | Promise<void>;
  loading?: Boolean;
}

const CustomTable: React.FC<CustomTableProps> = ({ columns, rows, onSelectedRows, loading }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number(event.target.value));
    setPage(0);
  };

  return (
    <Box
      sx={{
        width: '100%',
        marginTop: '32px',

      }}
    >
      {!rows!.length ? <EmptyTable /> : (
        <Paper
          sx={{
            width: '100%',
          }}
        >
          <TableContainer sx={{ maxHeight: '590px' }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      sx={{ background: '#D7DCDF' }}
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, borderRadius: column.borderRadius }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody sx={{ backgroundColor: '#FFFFFF' }}>
                {rows!.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <TableRow>
                    <TableCell>{AgentsNames[row.agente as keyof typeof AgentsNames]}</TableCell>
                    <TableCell>{row.pontoDeColeta}</TableCell>
                    <TableCell>{row.cidade}</TableCell>
                    <TableCell>{row.estado}</TableCell>
                    <TableCell>{formatValueToUnit(row.valor, AgentsLimitsUnits[row.agente as keyof typeof AgentsLimitsUnits])}</TableCell>
                    <TableCell>{formatValueToUnit(row.limiteMaximo, AgentsLimitsUnits[row.agente as keyof typeof AgentsLimitsUnits])}</TableCell>
                    <TableCell>{<StatusTag status={row.status} />}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            sx={{ div: { lineHeight: '1.4375em' } }}
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={rows!.length}
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
      )}
    </Box>
  );
}

export default CustomTable;
