import ReactApexChart  from 'react-apexcharts'
import { Box, Typography,Stack, colors } from '@pankod/refine-mui'
import { ArrowCircleUpRounded } from '@mui/icons-material'
import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  {name: 'January', TotalMembers: 1200},
  {name: 'February', TotalMembers: 2100},
  {name: 'March', TotalMembers: 800},
  {name: 'April', TotalMembers: 1600},
  {name: 'May', TotalMembers: 900},
  {name: 'June', TotalMembers: 1700},
];

const OverviewChart = ({aspect}) => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor='#fcfcfc'
      id='chart'
      display='flex'
      flexDirection='column'
      borderRadius='15px'
      boxShadow='2px 4px 10px 1px rgba(201,201,201,0.47)'
      width={{xs: '100%'}}
    >
      <Typography fontSize={18} fontWeight={600} color='#808191'>
        Attendance Within Last 6 Months
      </Typography>

      <Stack my='10px' direction='row' gap={4} flexWrap='wrap'>
        <Typography fontSize={23} fontWeight={700} color='#585858'>
          536,335 Overall Members
        </Typography>
        <Stack direction='row' alignItems='center' gap={1}>
          <ArrowCircleUpRounded sx={{fontSize: 25, color: '#000080'}}/>
          <Stack>
            <Typography fontSize={15} color='#000080'>12.8%</Typography>
            <Typography fontSize={12} color='#808191'>Than Initial Volume</Typography>
          </Stack>
        </Stack>
    </Stack>
    {/* <ReactApexChart 
      series={TotalRevenueSeries}
      type='bar'
      height={310}
      options={TotalRevenueOptions}
    /> */}

    <ResponsiveContainer width="100%" aspect={aspect}>
      <AreaChart width={730} height={340} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={1}/>
            <stop offset="95%" stopColor="#000080" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" className='gridChat'/>
        <Tooltip />
        <Area type="monotone" dataKey="TotalMembers" stroke="#585858" fillOpacity={1} fill="url(#total" />
      </AreaChart>
    </ResponsiveContainer>
    </Box>
  )
}

export default OverviewChart