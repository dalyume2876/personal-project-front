import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function footer() {
  return (
    <Box>
        <AppBar elevation={0} position='relative' sx={{ flex: 1,  width: '1100px', m: '0 auto', height:'100px', pt:'10px', pr:'10px', pl:'10px', backgroundColor:'white'}}>
        
            <Box>
                <Typography  sx={{fontFamily: '완주대둔산체, Arial, sans-serif', fontSize: '20px', fontWeight: 400, color: '#000000' }} >자원봉사포털</Typography>
            </Box>

            <Box sx={{ marginLeft: 'auto' }}>
      <Typography component='span' sx={{ fontSize: '12px', fontWeight: 400, color: '#000000' }}>Dalyume2876</Typography>
    </Box>

            <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#000000', pt:'20px' }}>ⓒ Copyright By Ministry of the Interior. All Rights Reserved.</Typography>

        </AppBar>
    </Box>
  )
}
