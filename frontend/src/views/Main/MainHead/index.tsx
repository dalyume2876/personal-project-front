import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'

export default function MainHead() {
    const imgUrl = 'https://ifh.cc/g/VJBFDW.png';
    const adultImg = 'https://ifh.cc/g/z0OzNN.png';
    const teenImg ='https://ifh.cc/g/vobJVb.png';
  return (
    <Box>
        <AppBar elevation={0} position='relative' sx={{ flex: 1,  width: '1100px', m: '0 auto', height:'600px', backgroundColor:'white', backgroundImage: `url(${imgUrl})`, backgroundSize:'cover', mt:'40px', mb:'40px'}}>
            <Typography style={{color:'white', WebkitTextStroke:'2px #a85c68'}} sx={{fontSize:'45px', fontWeight:'700', fontFamily:'HY헤드라인M, Arial, sans-serif', pt:'70px', pl:'15px'}}>
                국민을 위한 한 걸음. 자원봉사
            </Typography>
            <Box sx={{position: 'absolute', bottom: '100px', right: '150px', width: '300px', height: '200px', backgroundColor: 'rgba(171, 86, 108, 0.7)', borderRadius:'10px' }}>
              <Box sx={{pt:'70px', display:'flex',alignContent:'space-between',justifyContent:'center', }}>
                  <Box sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'space-around',textAlign: 'center',width: '50%',height: '100%', cursor:'pointer','&:hover':{backgroundColor:'rgba(171, 86, 108, 1)'} }}>
                    <img src={adultImg} alt="" style={{ width: '40%', height: '70%', objectFit: 'cover', borderRadius: '10px' }} />
                    <Typography sx={{fontSize:'15px', fontWeight:'700'}}>어른 자원봉사</Typography>
                    </Box>
                    <Box sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'space-around',textAlign: 'center',width: '50%',height: '100%', cursor:'pointer','&:hover':{backgroundColor:'rgba(171, 86, 108, 1)'} }}>
                      <img src={teenImg} alt="" style={{ width: '40%', height: '70%', objectFit: 'cover', borderRadius: '10px' }} />
                      <Typography sx={{fontSize:'15px', fontWeight:'700'}}>청소년 자원봉사</Typography>
                    </Box>
                </Box>
              </Box>
        </AppBar>
    </Box>
  )
}
