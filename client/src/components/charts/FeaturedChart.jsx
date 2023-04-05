// import ReactApexChart  from 'react-apexcharts'
import { Box, Typography,Stack } from '@pankod/refine-mui'

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { grey } from '@mui/material/colors';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './style.scss'




const FeaturedChart = () => {
  return (
    <Box
      p={4} 
      bgcolor='#fcfcfc'
      id='chart'
      // minWidth={470}
      minWidth={{xs: '100%', lg: 470}}
      display={{lg: 'flex'}}
      flexDirection='column'
      borderRadius='15px'
      boxShadow='2px 4px 10px 1px rgba(201,201,201,0.47)'
      // display='none'
    >
      <Typography fontSize={18} fontWeight={600} color='#808191'>
        Total Members as at 5th Feb, 2023
      </Typography>
      
      <Stack 
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        gap='10px'
        padding='20px'
      >
        <Stack height='100px' width='100px'>          
          <CircularProgressbarWithChildren value={80} strokeWidth={10}
            styles={{
              root: { width: 100 },
              path: { stroke: `#000080` },
              trail: { stroke: `#e4e8ef` },
              text: { fill: grey[800], fontSize: '1.5rem',},
              textStyle: {
                fill: grey[800],
                fontSize: '1.5rem',
                dominantBaseline: 'middle',
                textAnchor: 'middle',
              },
            }}
          >
            <div style={{ fontSize: '1.5rem' }}>
              {`80%`}
            </div>
          </CircularProgressbarWithChildren>
        </Stack>

        <Typography color='#585858' fontWeight='500' textTransform='capitalize' >total members 5th Feb, 2023</Typography>
        <Typography fontSize='30px'>800</Typography>
        <Typography fontSize='16px' fontWeight='500' color='#585858' textAlign='center' textTransform='capitalize'>analitycs for past three sundays</Typography>
        
        <div className="summary">
            
            <div className="items">
              <div className="itemTitle">16th Dec</div>
              <div className="itemPercentage positive">
                <KeyboardArrowUpIcon />
                80%
              </div>
            </div>
            
            <div className="items">
              <div className="itemTitle">10th Dec</div>
              <div className="itemPercentage positive">
                <KeyboardArrowUpIcon />
                70%
                </div>
            </div>
            
            <div className="items">
              <div className="itemTitle">8th Dec</div>
              <div className="itemPercentage negative">
                <KeyboardArrowDownIcon />
                40%
                </div>
            </div>
        </div>
      </Stack>
    </Box>
  )
}

export default FeaturedChart;