import { Box, AppBar, Toolbar, Typography, FormControl, Divider, Button, IconButton, TextField, InputAdornment } from '@mui/material';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import './style.css'

export default function NavigationBar() {

  const [isIconClicked, setIsIconClicked] = useState(false);
  const [searchButton, setSearchButton] = useState(false);

  //    Event Handler   //
  const IconClickHandler = () => {
    setIsIconClicked(!isIconClicked);
  }

  const SearchButtonClickHandler = () => {
    setSearchButton(!searchButton);
  }

  const additionalEffectClass = isIconClicked ? 'additional-effect visible' : 'additional-effect';

  return (
    <Box>
      {/* 맨 위 헤더 로그인 */}
      <Box sx={{ flexGrow: 1, backgroundColor: '#a85c68' }}>
          <AppBar elevation={0} position='relative' sx={{ flex: 1, backgroundColor: '#a85c68', width: '1100px', m: '0 auto'}}>
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

            <Box sx={{cursor: 'pointer', '&:hover':{color:'#000000'}}}>
              <Typography onClick={IconClickHandler} sx={{pt:'5px', pl:'5px'}}>
                  <DensitySmallIcon/>
              </Typography>
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
            {searchButton ? (
              <Box sx={{width:750, maxWidth:'100%', pl:'30px', display: 'flex', alignItems: 'center'}}>
                <TextField
                  hiddenLabel
                  variant='standard'
                  placeholder='검색어를 입력해주세요.'
                  sx={{width:'100%'}}
                  InputProps={{
                    sx: {
                      fontSize:'18px',
                      fontWeight:'500',
                      borderBottom:'1px solid #a85c68'
                    },
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Typography>
                          <SearchIcon/>
                        </Typography>
                      </InputAdornment>
                    )
                  }}
                  
                />
                
              </Box>
            ) : (
              <>
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
              </>
            )}
            
            <Box>
              <Typography onClick={SearchButtonClickHandler}>
                { searchButton ? (
                  <Box sx={{cursor: 'pointer', '&:hover':{color:'#000000'}}}>
                  <FormControl variant="outlined" sx={{ mr: '10px', fontWeight:'600', fontSize:'20px'}}>
                    <CloseIcon sx={{fontSize:'30px'}}/>
                  </FormControl>
                </Box>
                ):(
                  <Box sx={{cursor: 'pointer', '&:hover':{color:'#000000'}}}>
                    <SearchIcon sx={{ fontSize: '30px', pt:'10px' }} />
                  </Box>
                ) }
              </Typography>
            </Box>

            
          </Typography>
        </AppBar>

        <Divider />
      </Box>
      </div>
     
      
    </Box>
  )
}