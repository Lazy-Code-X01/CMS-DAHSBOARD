
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {data} from '../../data/attendanceData'

import './style.scss'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:nth-of-type(1)': {
      backgroundColor: theme.palette.common.white,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));


const AttendanceTable = () => {
  return (
    
        <TableContainer component={Paper}>

        <Table sx={{ minWidth: 700 }} aria-label="customized table">
        
        <TableHead >
            <TableRow >
            <StyledTableCell  className='styledTableHead'>ID</StyledTableCell>
            <StyledTableCell  className='styledTableHead'>Name</StyledTableCell>
            <StyledTableCell  className='styledTableHead'>GENDER</StyledTableCell>
            <StyledTableCell  className='styledTableHead'>STATUS</StyledTableCell>
            <StyledTableCell  className='styledTableHead'>DEPARTMENT</StyledTableCell>
            <StyledTableCell  className='styledTableHead'>TIME</StyledTableCell>
            {/* <StyledTableCell  className='styledTableHead'>Role</StyledTableCell> */}
            <StyledTableCell  className='styledTableHead'>Biometrics</StyledTableCell>
            </TableRow>
        </TableHead>
        
        <TableBody>
            {data.map((row) => (
            <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" className='styledTableRow'>
                {row.id}
                </StyledTableCell>
                <StyledTableCell className='styledTableRow'>
                <div className="cellWrapper">
                    <img src={row.img} alt="profile" className='image' />
                    {row.name} <br />
                    {row.phone}
                </div>
                </StyledTableCell>
                <StyledTableCell className='styledTableRow'>{row.gender}</StyledTableCell>
                <StyledTableCell className={`styledTableRow ${row.status}`}>{row.status}</StyledTableCell>
                <StyledTableCell className='styledTableRow'>{row.dept}</StyledTableCell>
                <StyledTableCell className='styledTableRow'>{row.time}</StyledTableCell>
                {/* <StyledTableCell className='styledTableRow'>{row.role}</StyledTableCell> */}
                <StyledTableCell align='right' className='styledTableRow'>
                <div className={`bio-btn ${row.biometricsValue}`}>
                    {row.biometricsValue}
                </div>
                </StyledTableCell>
            </StyledTableRow>
            ))}
        </TableBody>

        </Table>
    </TableContainer>
  )
}

export default AttendanceTable