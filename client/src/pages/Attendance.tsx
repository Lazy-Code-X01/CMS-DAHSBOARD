import {Box, Stack, Typography} from "@pankod/refine-mui"
import {data} from '../data/attendanceData'
import AttendanceTable from "components/attendance/AttendanceTable"


const Attendance = () => {
  return (
    <Box>
        <Stack 
            direction='row'
            justifyContent='space-between'
            alignItems='center'
        >
            <Typography fontSize={25} fontWeight={700} color='#11142d'>Attendance</Typography>
            
            <Typography fontSize={25} fontWeight='700' color={'#11142d'}>
                Attendees: <span className="count_el" style={{color: 'green'}}>{data.length}</span>
            </Typography>
        </Stack>
        
        <Box
            mt={'20px'}
            boxShadow='2px 4px 10px 1px rgba(201,201,201,0.47)'
            bgcolor={'#fff'}
        >
            <Box sx={{ overflow: "auto" }}>
            <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                <AttendanceTable /> 
            </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Attendance