import { CustomButton } from 'components'
import {Box, Stack, Typography, FormControl, Select, MenuItem, TextField,} from "@pankod/refine-mui"
import { useNavigate } from '@pankod/refine-react-router-v6'
import {profile} from '../assets'
import './scss/editMembers.scss'

// importing icons
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { PermIdentity, Publish } from '@mui/icons-material'
import DateRangeIcon from '@mui/icons-material/DateRange';

const EditMembers = () => {
  const navigate = useNavigate()

  return (
    <Box>      
      <Stack direction='row'
      justifyContent='space-between'
      alignItems='center'
      >
        <Typography fontSize={25} fontWeight={700} color='#11142d'>Edit User</Typography>
      
        <CustomButton 
          title='Create'
          handleClick={()=>navigate('/member/create')}
          backgroundColor='#000080'
          color='#fff'
          icon={<PersonAddAlt1Icon />}
        />
      </Stack>

      <Box 
        mt='20px' 
        display={'flex'}
        gap={'20px'}
        className='user'
        // flexDirection={{xs: 'column'}}
        // padding='20px'
        // bgcolor={'#fff'} 
      >

        <div className="userShow">
          <div className="userShowTop">
            <img 
              src={profile}
              alt="avatatar" 
              className='userShowImg'
            />  
            <div className="userShowTopTitle">
              <span className="userShowUsername">Tunde Amos</span>
              <span className="userShowUserTitle">Member</span>
            </div>
          </div>

          <div className="userShowBottom">
            {/* account details */}
            <Box>
              <span className="userShowTitle">Account Details</span>
                                    
              <div className="userShowInfo">
                  <PermIdentity  className='userShowIcon'/>
                  <span className="userShowInfoTitle">amotun99</span>
              </div>
              
              <div className="userShowInfo">
                  <DateRangeIcon  className='userShowIcon'/>
                  <span className="userShowInfoTitle">19 yrs</span>
              </div>
              
              <div className="userShowInfo">
                  <PermIdentity  className='userShowIcon'/>
                  <span className="userShowInfoTitle">Male</span>
              </div>
            </Box>
            {/* contact details */}
            <Box>
              <span className="userShowTitle">Contact Details</span>
                                
              <div className="userShowInfo">
                  <PermIdentity  className='userShowIcon'/>
                  <span className="userShowInfoTitle">+234 9019 953 850</span>
              </div>
              
              <div className="userShowInfo">
                  <PermIdentity  className='userShowIcon'/>
                  <span className="userShowInfoTitle">annabeck99@gmail.com</span>
              </div>
              
              <div className="userShowInfo">
                  <PermIdentity  className='userShowIcon'/>
                  <span className="userShowInfoTitle">Elvis Juntion. 12 Frankypaul Str.</span>
              </div>
            </Box>
            {/* other details */}
            <Box>
              <span className="userShowTitle">Other Details</span>
                                
              <div className="userShowInfo">
                  <PermIdentity  className='userShowIcon'/>
                  <span className="userShowInfoTitle">Member</span>
              </div>
              
              <div className="userShowInfo">
                  <PermIdentity  className='userShowIcon'/>
                  <span className="userShowInfoTitle">Minister</span>
              </div>
              
              <div className="userShowInfo">
                  <PermIdentity  className='userShowIcon'/>
                  <span className="userShowInfoTitle">Nov 22</span>
              </div>
            </Box>
          </div>
        </div>
        
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className='userUpdateForm'>
            <div className="userUpdateLeft">
              <FormControl  className='userUpdateItem'>
                  <label>Username</label>
                  <TextField
                    variant='outlined'
                    size='small'
                    placeholder='@annabeck99'
                    className='input'
                  />
                </FormControl>

                <FormControl  className='userUpdateItem'>
                    <label>Full Name</label>
                    <TextField
                      variant='outlined'
                      size='small'
                      placeholder='Tunde Amos'
                      className='input'
                    />
                </FormControl>

                <FormControl  className='userUpdateItem'>
                    <label>Gender</label>
                    <Select
                      variant='outlined'
                      size='small'
                      className='input'
                      displayEmpty
                    >
                      <MenuItem value='chior'> Male </MenuItem>
                      <MenuItem value='media'> Female </MenuItem>
                      <MenuItem value='media'> Rather not Say </MenuItem>
                    </Select>
                  </FormControl>

                  
                <FormControl className='userUpdateItem'>
                  <label>Departent</label>
                  <Select
                    variant='outlined'
                    size='small'
                    className='input'
                    displayEmpty
                    defaultValue='Chior'
                  >
                    <MenuItem value='chior'> Chior </MenuItem>
                    <MenuItem value='media'> Media </MenuItem>
                    <MenuItem value='minister'> Minister </MenuItem>
                    <MenuItem value='usher'> Usher </MenuItem>
                    <MenuItem value='security'> Security </MenuItem>
                    <MenuItem value='prayer'> Prayer </MenuItem>
                    <MenuItem value='evangelism'> Evangelism </MenuItem>
                    <MenuItem value='sunday school'> Sunday School </MenuItem>
                    <MenuItem value='youth'> Youth </MenuItem>
                    <MenuItem value='children'> Children </MenuItem>
                  </Select>
                </FormControl>

                
                <FormControl  className='userUpdateItem'>
                    <label>Age</label>
                    <TextField
                      variant='outlined'
                      size='small'
                      type={'number'}
                      placeholder='19'
                      className='input'
                    />
                </FormControl>

                
                <FormControl  className='userUpdateItem'>
                    <label>Birthday</label>
                    <TextField
                      variant='outlined'
                      size='small'
                      type='date'
                      className='input'
                    />
                </FormControl>

                
                <FormControl  className='userUpdateItem'>
                    <label>Phone</label>
                    <TextField
                      variant='outlined'
                      size='small'
                      type={'number'}
                      placeholder='09019953850'
                      className='input'
                    />
                </FormControl>
                
                <FormControl  className='userUpdateItem'>
                    <label>Number of Next of Kin</label>
                    <TextField
                      variant='outlined'
                      size='small'
                      type={'number'}
                      placeholder='09019953850'
                      className='input'
                    />
                </FormControl>

                                
                <FormControl  className='userUpdateItem'>
                    <label>Address</label>
                    <TextField
                      variant='outlined'
                      size='small'
                      placeholder='Elvis Juntion. 12 Frankypaul Str.'
                      className='input'
                    />
                </FormControl>
            </div>

            <div className="userUpdateRight">
                <div className="userUpdateUpload">
                    <img src={profile} alt="avatar" className='userUpdateImg'/>
                    <label htmlFor="file"> <Publish className='userUpdateIcon'/> </label>
                    <input type="file" id='file' style={{display: 'none'}}/>
                </div>
                <CustomButton 
                  title='update'
                  backgroundColor='#000080'
                  color='#fcfcfc'
                />
            </div>
          </form>
        </div>

      </Box>

    </Box>
  )
}

export default EditMembers