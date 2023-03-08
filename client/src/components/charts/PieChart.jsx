import ReactApexChart from 'react-apexcharts'
import { Box, Typography,Stack } from '@pankod/refine-mui'


const PieChart = ({title, value, series, colors}) => {
  return (
    <Box  
      id='chart'
      flex={1}
      display='flex'
      bgcolor='#fcfcfc'
      flexDirection='row'
      justifyContent='space-between'
      alignContent='center'
      pl={3.5}
      py={2}
      gap={2}
      borderRadius='15px'
      minHeight='110px'
      width='fit-content'
      boxShadow='2px 4px 10px 1px rgba(201,201,201,0.47)'    
    >
      <Stack direction='column'>
        <Typography fontSize={14} color='#808191' >{title}</Typography>
        <Typography fontSize={24} color='#585858' fontWeight={700} mt={1}>{value}</Typography>
      </Stack>

      <ReactApexChart 
        options={{
          chart: {type: 'donut'},
          colors,
          legend: {show: false},
          dataLabels: {enabled: true},
        }}
        series={series}
        type='donut'
        width='120px'
      />
    </Box>
  )
}

export default PieChart


