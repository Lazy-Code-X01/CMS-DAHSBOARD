//importing material UI table components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from '@pankod/refine-react-router-v6'
import { useState } from 'react'

// importing data
import data from '../../data/membersData'


// importing images
import { profile } from '../../assets'
import { profile2 } from '../../assets'


import './membersTable.scss'

const MembersTable = () => {
  const navigate = useNavigate()

  const data = [

    {
      id: 1,
      name: 'Tunde Amos',
      phone: '+2349019953850',
      img: profile,
      gender: 'Male',
      status: 'Member',
      dept: 'Ushering',
      dob: 'Nov., 22',
    },
    {
      id: 2,
      name: 'John Doe',
      phone: '+2349019953850',
      img: profile2,
      gender: 'Female',
      status: 'Worker',
      dept: 'Media',
      dob: 'Nov., 22',
    },
    {
      id: 3,
      name: 'Adeyemi Juwon',
      phone: '+2349019953850',
      img: profile,
      gender: 'Male',
      status: 'Minister',
      dept: 'Chior',
      dob: 'Nov., 22',
    },
    {
      id: 4,
      name: 'Stanley Okoli',
      phone: '+2349019953850',
      img: profile,
      gender: 'Male',
      status: 'Member',
      dept: 'Children',
      dob: 'Nov., 22',
    },
    {
      id: 5,
      name: 'Emmanuel Dara',
      phone: '+2349019953850',
      img: profile2,
      gender: 'Female',
      status: 'Worker',
      dept: 'Chior',
      dob: 'Nov., 22',   
    },
    {
      id: 6,
      name: 'Domminion Tunde',
      phone: '+2349019953850',
      img: profile,
      gender: 'Male',
      status: 'Worker',
      dept: 'Children',
      dob: 'Nov., 22',    
    },
    {
      id: 1,
      name: 'Tunde Amos',
      phone: '+2349019953850',
      img: profile,
      gender: 'Male',
      status: 'Member',
      dept: 'Ushering',
      dob: 'Nov., 22',
    },
    {
      id: 2,
      name: 'John Doe',
      phone: '+2349019953850',
      img: profile2,
      gender: 'Female',
      status: 'Worker',
      dept: 'Media',
      dob: 'Nov., 22',
    },
    {
      id: 3,
      name: 'Adeyemi Juwon',
      phone: '+2349019953850',
      img: profile,
      gender: 'Male',
      status: 'Minister',
      dept: 'Chior',
      dob: 'Nov., 22',
    },
    {
      id: 4,
      name: 'Stanley Okoli',
      phone: '+2349019953850',
      img: profile,
      gender: 'Male',
      status: 'Member',
      dept: 'Children',
      dob: 'Nov., 22',
    },
    {
      id: 5,
      name: 'Emmanuel Dara',
      phone: '+2349019953850',
      img: profile2,
      gender: 'Female',
      status: 'Worker',
      dept: 'Chior',
      dob: 'Nov., 22',   
    },
    {
      id: 6,
      name: 'Domminion Tunde',
      phone: '+2349019953850',
      img: profile,
      gender: 'Male',
      status: 'Worker',
      dept: 'Children',
      dob: 'Nov., 22',    
    },
  ]

  const [members, setMembers] = useState(data)

  // delete function
  const handleDelete = (id) => {
    const newMembers = members.filter((member) => member.id !== id)
    setMembers(newMembers)
  }

  //scroll to top button for view button when the component is re-rendered
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

  return (
    <TableContainer component={Paper} className='table'>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">

            <TableHead className='tableHead'>
                <TableRow>
                  <TableCell className="tableCell">NAME</TableCell>
                  <TableCell className="tableCell">GENDER</TableCell>
                  <TableCell className="tableCell">BIRTHDAY</TableCell>
                  <TableCell className="tableCell">STATUS</TableCell>
                  <TableCell className="tableCell">DEPT.</TableCell>
                  <TableCell className="tableCell">ACTIONS</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>

                {members.map((data, index) => (

                <TableRow key={index} >

                    <TableCell className="tableCell">
                      <div className="cellWrapper">
                        <img src={data.img} alt="profile loading ..." className='image' />
                        <div className="wrap">
                          <div className='name'>
                            {data.name}
                          </div>
                          <div className='phone'>
                            {data.phone}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="tableCell">{data.gender}</TableCell>
                    <TableCell className="tableCell">{data.dob}</TableCell>
                    <TableCell className={`tableCell ${data.status}`}>{data.status}</TableCell>
                    <TableCell className="tableCell">{data.dept}</TableCell> 
                    <TableCell className="tableCell action">
                    {/* <Link to='/lists/members/singletest' style={{textDecoration: 'none'}}> */}
                      <span 
                        className="view" 
                        // onClick={goToTop}
                        onClick={()=>navigate('/member/show')}  
                      >
                        View
                      </span>
                    {/* </Link> */}
                      <span className="delete" onClick={()=>handleDelete(data.id)}>Delete</span>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default MembersTable