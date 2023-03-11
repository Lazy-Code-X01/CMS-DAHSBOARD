import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Box, Stack, Typography} from "@pankod/refine-mui"
import Paper from '@mui/material/Paper';

const List = () => {
  return (
    // <Box sx={{ overflow: "auto" }}>
    // <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
    <TableContainer component={Paper} style={{display: 'block'}}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>NAME</TableCell>
          <TableCell>AGE</TableCell>
          <TableCell>DEPARTMENT</TableCell>
          <TableCell>BIRTHDAY</TableCell>
          <TableCell>ACTIONS</TableCell>
          <TableCell>STATUS</TableCell>
        </TableRow>
        {/* more rows */}
      </TableBody>
    </Table>
   </TableContainer>
  //  </Box>
  //  </Box>
  )
}

export default List