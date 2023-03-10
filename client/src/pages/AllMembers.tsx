import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import {useList} from '@pankod/refine-core'
import {Box, Stack, Typography} from "@pankod/refine-mui"
import { useNavigate } from '@pankod/refine-react-router-v6'
import { MembersTable, CustomButton, List } from 'components'


const AllMembers = () => {

  const navigate = useNavigate()
  
  return (
    <Box>
      
      <Stack direction='row'
      justifyContent='space-between'
      alignItems='center'
      >
        <Typography fontSize={25} fontWeight={700} color='#11142d'>All Members</Typography>
      
        <CustomButton 
          title='Add Member'
          handleClick={()=>navigate('/member/create')}
          backgroundColor='#000080'
          color='#fff'
          icon={<PersonAddAlt1Icon />}
        />
      </Stack>

      <Box
        mt='20px' 
        boxShadow='2px 4px 10px 1px rgba(201,201,201,0.47)'
        bgcolor={'#fff'} 
        // sx={{ height: 'calc(100vh - 150px)' }}
        overflow={'auto'}
      >
        <Box sx={{ overflow: "auto" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          {/* <List /> */}
          <MembersTable />
        </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AllMembers