import {Box, Stack, Typography} from "@pankod/refine-mui"
import LineChart from "components/charts/LineChart"
import { MembersTable } from "components"

// importing external styles
import './scss/memberDetails.scss'
import {profile} from '../assets'
import { useNavigate, useParams } from '@pankod/refine-react-router-v6'

const MemberDetails = () => {
  
  const navigate = useNavigate()
    
  return (
    <Box>
      <Stack direction='row'
        justifyContent='space-between'
        alignItems='center'
        mb={'20px'}
      >
        <Typography fontSize={25} fontWeight={700} color='#11142d'>Bio Data</Typography>
      </Stack>

      <Box
        display='flex'
        gap='20px' 
        // flexDirection={{xs: 'column'}}
        className='hhh'
      > 
       {/* left side */}
        <Box  position='relative' flex={'1'} padding='20px' boxShadow='2px 4px 10px 1px rgba(201,201,201,0.47)' borderRadius='15px' bgcolor={'#fff'}>
          <Typography 
            className="editButton"
            onClick={()=>navigate('/member/edit')}
          >
            Edit
          </Typography>
          <Typography fontSize={'20px'} fontWeight={'700'} color='#808191' mb={'20px'}>Information</Typography>
        
          <div className="item">
            <img src={profile} alt="avatar"  className="itemImg"/>
            <div className="details">
              <Typography className='itemTitle'>Tunde Amos</Typography>
                
                <Box className='detailItem'>
                  <span className="itemKey">Gender:</span>
                  <span className="itemValue"> Male (M)</span>
                </Box>
                
                <Box className='detailItem'>
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">johndoe686@gmail.com</span>
                </Box>
                
                <Box className='detailItem'>
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+234 9019 953 850</span>
                </Box>
                
                <Box className='detailItem'>
                  <span className="itemKey">Department:</span>
                  <span className="itemValue">Usher</span>
                </Box>
                
                <Box className='detailItem'>
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">Minister</span>
                </Box>
                
                <Box className='detailItem'>
                  <span className="itemKey">Number of next of kin:</span>
                  <span className="itemValue">+2349019953859</span>
                </Box>
                
                <Box className='detailItem'>
                  <span className="itemKey">Date joined:</span>
                  <span className="itemValue">07 | 08 | 2004</span>
                </Box>
                
                <Box className='detailItem'>
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Elvis Junction. 17 Frankypual str. Lagos</span>
                </Box>
                
                <Box className='detailItem'>
                  <span className="itemKey">State of origin:</span>
                  <span className="itemValue">OSUN</span>
                </Box>
                
                <Box className='detailItem'>
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">NIGERIA</span>
                </Box>

            </div>
          </div>
        </Box>

        {/* right side */}
        <Box 
          flex='2'
          padding={'20px'}
          bgcolor='#fff'
          borderRadius={'15px'}
          boxShadow='2px 4px 10px 1px rgba(201,201,201,0.47)'
        >
          <LineChart

          />
        </Box>
      </Box>

      <Box 
        mt='20px' 
        padding='20px'
        boxShadow='2px 4px 10px 1px rgba(201,201,201,0.47)'
        bgcolor={'#fff'}   
        borderRadius='15px'
        overflow='auto'
      >
        <Typography fontSize={'20px'} fontWeight={'700'} color='#808191' mb={'20px'}>Other Members</Typography>        
        <Box sx={{ overflow: "auto" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <MembersTable />
        </Box>
        </Box>
      </Box>
    </Box>

  )
}

export default MemberDetails