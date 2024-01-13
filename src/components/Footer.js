import { Box, Button, ButtonGroup, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { palette } from '@mui/system';


const Footer = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '10vh',
      height: '10vh',
      bgcolor: 'grey'
    }}>

      <Toolbar >
        <Typography flexGrow={4} color='white'>2023 © CodeRiser Technology</Typography>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button sx={{ color: 'white' }}>Home</Button>
          <Button sx={{ color: 'white' }}>About</Button>
          <Button sx={{ color: 'white' }}>Contact Us</Button>
        </ButtonGroup>

      </Toolbar>

    </Box>
  )
}

export default Footer
