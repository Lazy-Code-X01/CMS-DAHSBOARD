import { useList } from "@pankod/refine-core"

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from 'components'

import FeaturedChart from "components/charts/FeaturedChart"
import OverviewChart from "components/charts/OverviewChart"

import { Typography, Box, Stack } from "@pankod/refine-mui"

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
          colors={['#000080', '#e4e8ef']}
        />
        <PieChart 
          title='Present in Attendance'
          value={550}
          series={[60, 40]}
          colors={['#000080', '#e4e8ef']}
        />
        <PieChart 
          title='Total Members'
          value={5684}
          series={[75, 25]}
          colors={['#000080', '#e4e8ef']}
          // colors={['#475ae8', '#e4e8ef']}
        />
      </Box>

      <Stack mt='25px' width='100%' gap={4} direction={{xs: 'column', lg: 'row'}}>
        <OverviewChart 
          aspect={2}
        />
        <FeaturedChart />
      </Stack>
    </Box>
  )
}

export default home