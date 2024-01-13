import { Typography, Button, Modal, Box, TextField, Stack } from '@mui/material'

import React from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const MyModal = (props) => {
  
  return (
    <Modal
      open={props.status}
      onClose={props.handleClose}
      aria-labelledby='login-modal'
      aria-describedby='login-modal-details'
    >
      <Box sx={{ ...style, }}>
        <Stack>
          <Typography variant='h4' id='login-modal' textAlign={'center'} marginY={3}> Login Form</Typography>
          <TextField id="email" name='email' label="Email Address" variant="outlined" sx={{ mb: 2 }} required />
          <TextField id="password" name='password' label="Password" variant="outlined" required />
          <Button variant='contained' sx={{ mt: 2, backgroundColor: 'grey' }}>Submit</Button>
          <Button variant='contained' onClick={props.handleClose} sx={{ mt: 2, backgroundColor: 'grey' }}>Close</Button>
          <Typography variant='body2' textAlign={'center'} marginY={3}>This is a sample of <b>Modal</b></Typography>
        </Stack>
      </Box>
    </Modal>
  )
}

export default MyModal
