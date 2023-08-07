import { useList } from "@pankod/refine-core"

import {
  PieChart,
} from 'components'

import FeaturedChart from "components/charts/FeaturedChart"
import OverviewChart from "components/charts/OverviewChart"
import { Typography, Box, Stack } from "@pankod/refine-mui"
import AttendanceTable from "components/attendance/AttendanceTable"

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color='#11142d'>
        Dashboard
      </Typography>

      <Box mt='20px' display='flex' flexWrap='wrap' gap={4}>

        <PieChart 
          title='New Members for this Month'
          value={684}
          series={[75, 25]}
          colors={['#000080', '#7EA7F4']}
        />
        <PieChart 
          title='Present in Attendance'
          value={550}
          series={[60, 40]}
          colors={['#006633', '#90BC61']}
        />
        <PieChart 
          title='Total Members'
          value={5684}
          series={[75, 25]}
          colors={['#8B4000', '#FF9933']}
          // colors={['#475ae8', '#e4e8ef']}
        />
      </Box>

      <Stack mt='25px' width='100%' gap={4} direction={{xs: 'column', lg: 'row'}}>
        <OverviewChart 
          aspect={2}
        />
        <FeaturedChart />
      </Stack>

      <Box
        mt={'20px'}
        boxShadow='2px 4px 10px 1px rgba(201,201,201,0.47)'
        bgcolor='#fcfcfc'
        p={4}
        borderRadius='15px'
      >
        <Typography fontSize={20} fontWeight={700} color='#808191'>Attendees for <i>5th Feb, 2023</i></Typography>
        <Box sx={{ overflow: "auto", marginTop: '15px' }}>
          <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
            <AttendanceTable /> 
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default home