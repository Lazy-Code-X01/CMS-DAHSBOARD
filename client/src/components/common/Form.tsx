import { useState } from 'react';
import {Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button } from '@pankod/refine-mui'
import { FormProps } from 'interfaces/common' 
import CustomButton from './CustomButton'
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import './form.scss'

// const logo = 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
import profile from "assets/profile.svg";
const Form = ({type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, memberImage}: FormProps) => {
  const [file, setFile] = useState('')
  
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color='#11142d'>
        {type} a Member
      </Typography>

      <Box 
        mt={2.5} 
        borderRadius='15px' 
        padding='20px' 
        bgcolor='#fcfcfc' 
        boxShadow='2px 4px 10px 1px rgba(201,201,201,0.47)'
      >
        <form style={{marginTop: '20px', width:'100%', display: 'flex'}} onSubmit={handleSubmit(onFinishHandler)}>
            {/* left side */}
            <Box className='left'>
              <img
                //@ts-ignore
                src={file ? URL.createObjectURL(file) : profile } 
                alt="avatar" 
              />
                <Typography fontSize={14} color='#808191' sx={{wordBreak: 'break-all'}}>Profile Image</Typography>
            </Box>

            {/* right side */}
            <Box className='right'>
              <Box className='stack'>

                <FormControl style={{width: '40%'}}>
                  <label htmlFor='file'>
                    Image: <DriveFolderUploadRoundedIcon className='icon' />
                  </label>

                  <input 
                    type="file"  
                    id='file' 
                    //@ts-ignore
                    onChange={(e)=> setFile(e.target.files[0])}
                    style={{display: 'none'}}
                  />
                </FormControl>

                <FormControl style={{width: '40%'}}>
                  <label>Username</label>
                  <TextField
                    variant='outlined'
                    size='small'
                    placeholder='@john_doe'
                    className='input'
                    {...register('username', {required: true})}
                  />
                </FormControl>

                <FormControl style={{width: '40%'}}>
                  <label>Name and Surname</label>
                  <TextField
                    variant='outlined'
                    size='small'
                    placeholder='John Doe'
                    className='input'
                    {...register('fullName', {required: true})}
                  />
                </FormControl>

                <FormControl style={{width: '40%'}}>
                  <label>Email</label>
                  <TextField
                    variant='outlined'
                    size='small'
                    placeholder='johndoe@example.com'
                    className='input'
                    {...register('email', {required: true})}
                  />
                </FormControl>

                <FormControl style={{width: '40%'}}>
                  <label>Phone</label>
                  <TextField
                    variant='outlined'
                    size='small'
                    placeholder='09019953850'
                    className='input'
                    type='number'
                    {...register('phone', {required: true})}
                  />
                </FormControl>
                
                <FormControl style={{width: '40%'}}>
                  <label>Status</label>
                  <TextField
                    variant='outlined'
                    size='small'
                    placeholder='member'
                    className='input'
                    {...register('status', {required: true})}
                  />
                </FormControl>

                <FormControl style={{width: '40%'}}>
                  <label>Departent</label>
                  <Select
                    variant='outlined'
                    size='small'
                    className='input'
                    {...register('department', {required: true})}
                    displayEmpty
                    defailtValue='Chior'
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

                <FormControl style={{width: '40%'}}>
                  <label>Number of Next of Kin</label>
                  <TextField
                    variant='outlined'
                    size='small'
                    placeholder='09019953850'
                    className='input'
                    type='number'
                    {...register('phoneOfNextOfKin', {required: true})}
                  />
                </FormControl>

                <FormControl style={{width: '40%'}}>
                  <label>Birthday</label>
                  <TextField
                    variant='outlined'
                    size='small'
                    placeholder='Jul 08 2004'
                    className='input'
                    type='date'
                    {...register('birthday', {required: true})}
                  />
                </FormControl>

                <FormControl style={{width: '40%'}}>
                  <label>Address</label>
                  <TextField
                    variant='outlined'
                    size='small'
                    placeholder='21 Hon Frankypaul Street, Ibasa Satelite Town, Lagos'
                    className='input'
                    {...register('address', {required: true})}
                  />
                </FormControl>

                <FormControl style={{width: '40%'}}>
                  <label>State of Origin</label>
                  <TextField
                    variant='outlined'
                    size='small'
                    placeholder='Ife North'
                    className='input'
                    {...register('stateOfOrigin', {required: true})}
                  />
                </FormControl>

                <FormControl style={{width: '40%'}}>
                  <label>Country</label>
                  <TextField
                    variant='outlined'
                    size='small'
                    placeholder='Nigeria'
                    className='input'
                    {...register('country', {required: true})}
                  />
                </FormControl>

                <CustomButton
                  type='Submit'
                  title={formLoading ? 'Submitting...' : 'Submit'}
                  backgroundColor='#000080'
                  color='#fff'
                />
              </Box>
            </Box>
        </form>
      </Box>
    </Box>
  )
}
export default Form