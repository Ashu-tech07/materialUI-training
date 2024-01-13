import { Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton,ThemeProvider, Typography, createTheme } from '@mui/material'
import React from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Page = () => {
    const theme = createTheme({
        typography: {
            body2: {
                fontSize: 14,
            },
            body1: {
                fontSize: 25,
            },
        },
    });
    return (
        <Grid container className='main'>
            <Grid item container margin={1} marginTop={4} justifyContent={'center'}>
                <Grid item xs={8} >
                    <Typography variant='h2' margin={0} textAlign={'center'}>Pricing</Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant='subtitle1' paragraph={true} textAlign={'center'} >
                        Quickly build an effective pricing table for your potential customers with this layout. It's
                        built with default Material-UI components with little customization.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} marginBottom={1} spacing={2} container justifyContent={'space-evenly'}>
                <Grid item xs={10} md={3} container flexDirection={'column'} justifyContent={'flex-end'} >
                    <Grid item >
                        <Card variant='outlined'>
                            <CardHeader
                                title='Free'
                                sx={{
                                    textAlign: 'center', bgcolor: 'lightgrey'
                                }}
                            />
                            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                                <ThemeProvider theme={theme}>
                                    <Grid container justifyContent={'center'}>
                                        <Grid item height={10} >
                                            <Typography variant="body1" color="text.primary" textAlign={'center'}>
                                                $0
                                            </Typography>
                                        </Grid>
                                        <Grid item height={10}>
                                            <Grid container height={10} flexDirection={'column'} justifyContent={'flex-end'}>
                                                <Grid item height={2}>
                                                    <Typography variant="body2" component='span' color="text.secondary">
                                                        /mo
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </ThemeProvider>
                            </CardContent>
                            <CardContent>
                                <Typography textAlign={'center'}>10 Users included</Typography>
                                <Typography textAlign={'center'}>2GB of stoarge</Typography>
                                <Typography textAlign={'center'}>Help center access</Typography>
                                <Typography textAlign={'center'}>Email support</Typography>
                            </CardContent>
                            <CardActions>
                                <Grid container xs={12} justifyContent={'center'}>
                                    <Button variant='contained' sx={{ bgcolor: 'text.disabled' }}>Subscribe</Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item xs={10} md={3} container flexDirection={'column'} justifyContent={'flex-end'}>
                    <Grid item>
                        <Card variant='outlined'>
                            <CardHeader
                                action={
                                    <IconButton><StarOutlineIcon /></IconButton>
                                }
                                title='Pro'
                                subheader='Most popular'
                                sx={{
                                    textAlign: 'center', bgcolor: 'lightgrey'
                                }}

                            />
                            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                                <ThemeProvider theme={theme}>
                                    <Grid container justifyContent={'center'}>
                                        <Grid item height={10} >
                                            <Typography variant="body1" color="text.primary" textAlign={'center'}>
                                                $15
                                            </Typography>
                                        </Grid>
                                        <Grid item height={10}>
                                            <Grid container height={10} flexDirection={'column'} justifyContent={'flex-end'}>
                                                <Grid item height={2}>
                                                    <Typography variant="body2" component='span' color="text.secondary">
                                                        /mo
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </ThemeProvider>
                            </CardContent>
                            <CardContent>
                                <Typography textAlign={'center'}>20 Users included</Typography>
                                <Typography textAlign={'center'}>10GB of stoarge</Typography>
                                <Typography textAlign={'center'}>Help center access</Typography>
                                <Typography textAlign={'center'}>Priority email support</Typography>
                            </CardContent>
                            <CardActions>
                                <Grid container xs={12} justifyContent={'center'}>
                                    <Button variant='contained' sx={{ bgcolor: 'text.disabled' }}>Subscribe</Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item xs={10} md={3} container flexDirection={'column'} justifyContent={'flex-end'}>
                    <Grid item>
                        <Card variant='outlined'>
                            <CardHeader
                                title='Enterprise'
                                sx={{
                                    textAlign: 'center', bgcolor: 'lightgrey'
                                }}

                            />
                            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                                <ThemeProvider theme={theme}>
                                    <Grid container justifyContent={'center'}>
                                        <Grid item height={10} >
                                            <Typography variant="body1" color="text.primary" textAlign={'center'}>
                                                $30
                                            </Typography>
                                        </Grid>
                                        <Grid item height={10}>
                                            <Grid container height={10} flexDirection={'column'} justifyContent={'flex-end'}>
                                                <Grid item height={2}>
                                                    <Typography variant="body2" component='span' color="text.secondary">
                                                        /mo
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </ThemeProvider>
                            </CardContent>
                            <CardContent>
                                <Typography textAlign={'center'}>50 Users included</Typography>
                                <Typography textAlign={'center'}>30GB of stoarge</Typography>
                                <Typography textAlign={'center'}>Help center access</Typography>
                                <Typography textAlign={'center'}>Phone & email support</Typography>
                            </CardContent>
                            <CardActions>
                                <Grid container xs={12} justifyContent={'center'}>
                                    <Button variant='contained' sx={{ bgcolor: 'text.disabled' }}>Subscribe</Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Page
