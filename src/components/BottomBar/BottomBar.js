import React from 'react';
import {useEffect, useState} from 'react';   
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function Bottombar(props) {
    const { onPreviousButtonClick,  onNextButtonClick, onReviewButtonClick } = props;
    const styles = {
        filled: {
            // backgroundColor: '#01678f',
            // '&:hover': {
            //     backgroundColor: '#01678f',
            //     opacity: 0.9
            // },
            marginLeft: 2
        },
        unfilled: {
            color: '#595959'
        },
        paper: {
            position: 'fixed',
            bottom: 0, 
            left: '0px',
            right: 0,
            height: '60px',
            zIndex: 2,
        }
    }

  return ( 
    <Box sx={{ width: 500 }}>
      <CssBaseline />
      <Paper sx={styles.paper} elevation={3}>
            <Grid container sx={{marginTop: '10px'}}>
                <Grid item xs={6}>
                    <Box sx={{display: 'flex', justifyContent: 'flex-start', marginLeft:'10px'}}>
                        <Button 
                            variant="outlined" 
                            startIcon={<KeyboardArrowLeftIcon/>}
                            onClick={onPreviousButtonClick}
                        > 
                            Previous
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end', marginRight:'10px'}}>
                        <Button 
                            variant="outlined" 
                            endIcon={<KeyboardArrowRightIcon/>}
                            onClick={onNextButtonClick}
                        >
                            next
                        </Button>
                        <Button 
                            sx={styles.filled} 
                            variant="contained" 
                            endIcon={<CheckCircleOutlineIcon/>}
                            onClick={onReviewButtonClick}
                        > 
                            Mark as reviewed & next 
                        </Button>
                    </Box>
                </Grid>
            </Grid>
      </Paper>
    </Box>
  );

}


