import { Box, AppBar, Toolbar, Typography, FormControl, Divider, Button, IconButton } from '@mui/material';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import './style.css'

export default function NavigationBar() {

  const [isIconClicked, setIsIconClicked] = useState(false);

  //    Event Handler   //
  const IconClickHandler = () => {
    setIsIconClicked(!isIconClicked);
  }

  const additionalEffectClass = isIconClicked ? 'additional-effect visible' : 'additional-effect';

  return (
    <Box>
      {/* 맨 위 헤더 로그인 */}
      <Box sx={{ flexGrow: 1, backgroundColor: 'orange' }}>
          <AppBar elevation={0} position='relative' sx={{ flex: 1, backgroundColor: 'orange', width: '1100px', m: '0 auto'}}>
          <Toolbar>
            <Typography
              fontSize='14px'
              component="div"
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end', 
                color: "#495a57"
              }}
              lineHeight='100%'
            >
              
                <Box sx={{  flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ fontFamily: '완주대둔산체, Arial, sans-serif' ,color:'#000000' ,fontSize: '25px', fontWeight: '700', cursor:'pointer' }}>
                  자원봉사포털
                </Typography>
              </Box>

              
              <Box sx={{cursor: 'pointer', '&:hover':{color:'#000000'}}}>
                <FormControl variant="outlined" sx={{ mr: '10px', fontWeight:'600' }}>
                  로그인
                </FormControl>
              </Box>

              <FormControl variant="outlined" sx={{ mr: '10px', color:'rgba(5, 5, 5, 0.5)' }}>
                |
              </FormControl>

              <Box sx={{cursor: 'pointer', '&:hover':{color:'#000000'}}}>
                <FormControl variant="outlined" sx={{ mr: '10px', fontWeight:'600' }}>
                  회원가입
                </FormControl>
              </Box>

            <Box>
              <IconButton onClick={IconClickHandler}>
                  <DensitySmallIcon/>
              </IconButton>
            </Box>

            </Typography>
          </Toolbar>
          </AppBar>
      </Box>

      
      <div className={`additional-effect ${additionalEffectClass}`}>

        <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} position='relative' sx={{ flex: 1, width: '1100px', m: '0 auto', height:'70px'}}>
          <Typography 
          fontSize='20px'
          fontWeight='600'
          component="div"
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around', 
            color: "#adb5bd",
            backgroundColor:'white'
          }}
          lineHeight='100%'
          >
            <Box sx={{cursor: 'pointer', '&:hover':{color:'#000000'}}}>
                <FormControl variant="outlined" sx={{ mr: '10px', fontWeight:'600' }}>
                  봉사안내
                </FormControl>
            </Box>
            
            <Box sx={{cursor: 'pointer', '&:hover':{color:'#000000'}}}>
                <FormControl variant="outlined" sx={{ mr: '10px', fontWeight:'600' }}>
                  봉사참여
                </FormControl>
            </Box>
            
            <Box sx={{cursor: 'pointer', '&:hover':{color:'#000000'}}}>
                <FormControl variant="outlined" sx={{ mr: '10px', fontWeight:'600' }}>
                  봉사정보
                </FormControl>
            </Box>
            
            <Box sx={{cursor: 'pointer', '&:hover':{color:'#000000'}}}>
                <FormControl variant="outlined" sx={{ mr: '10px', fontWeight:'600' }}>
                  내 자원봉사
                </FormControl>
            </Box>

            <Box>
              <IconButton size='large'>
                <SearchIcon sx={{fontSize:'30px'}}/>
              </IconButton>
            </Box>
            
          </Typography>
        </AppBar>

        <Divider />
      </Box>
      </div>
     
      
    </Box>
  )
}