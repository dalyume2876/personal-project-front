import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'

export default function MainHead() {
    const imgUrl = 'https://ifh.cc/g/VJBFDW.png';
  return (
    <Box>
        <AppBar elevation={0} position='relative' sx={{ flex: 1,  width: '1100px', m: '0 auto', height:'600px', backgroundColor:'white', backgroundImage: `url(${imgUrl})`, backgroundSize:'cover', mt:'40px', mb:'40px'}}>
            <Typography style={{color:'white', WebkitTextStroke:'2px #a85c68'}} sx={{fontSize:'45px', fontWeight:'700', fontFamily:'HY헤드라인M, Arial, sans-serif', pt:'70px', pl:'15px'}}>
                국민을 위한 한 걸음. 자원봉사
            </Typography>
        </AppBar>
    </Box>
  )
}
