import React from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Card, CardContent, CardActions, TextField, Typography, Stack, Button, Avatar, Checkbox, Grid, Box } from '@mui/material'

const Main = () => {
    return (
        
        <Box sx={{ justifyContent:'center', display: 'flex', minHeight: '70vh', height :'70vh'}}>
            <Card variant='outlined' sx={{width:'40%',justifyContent:'center', display:'flex'}}>
                <CardContent>
                    <Stack>
                        <Avatar sx={{ bgcolor: 'red',alignSelf: 'center'}}>
                            <LockOpenIcon />
                        </Avatar>
                        <Typography variant='h5' sx={{textAlign:'center', mt:2,mb:2}} >Sign in</Typography>
                        <TextField id="email" name='email' label="Email Address" variant="outlined"  sx={{mb:2}} required/>
                        <TextField id="password" name='password' label="Password" variant="outlined" required />
                        <Grid 
                        container
                        direction="row">
                            <Grid item >
                            <Checkbox sx={{ml:-1}}/>    
                            <Typography variant='body'> Remember Me </Typography>
                            </Grid>  
                        </Grid>
                       <Button variant='contained'>SIGN IN</Button> 
                       <Grid 
                        container
                        direction="row"
                        >
                            <Grid item xs={6}>
                            <Button>Forgot password?</Button> 
                            </Grid>
                            <Grid item xs={6} justifyContent='right' alignContent='right'>   
                            <Button>Doesn't have an account? Sign Up</Button>
                            </Grid>  
                        </Grid>   
                    </Stack>
                </CardContent>
            </Card>
        </Box>
  
    )
}

export default Main
