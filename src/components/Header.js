import React, { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { AppBar, Toolbar, Typography, Button} from '@mui/material'
import MyModal from './MyModal';

const Header = (props) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    }

    return (
        <>
            <AppBar className='header' position='static' sx={{ bgcolor: 'grey' }}>
                <Toolbar>
                    <Typography variant='h6' flexGrow={1}> CodeRiser</Typography>
                    <Button variant="text" color='inherit'>Feature</Button>
                    <Button variant="text" color='inherit'>Enterprise</Button>
                    <Button variant="text" color='inherit'>Support</Button>
                    <Button variant="contained" color='grey' startIcon={<LoginIcon />} onClick={handleOpen}>Login</Button>
                    <MyModal status={open} handleClose={handleClose} />
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
