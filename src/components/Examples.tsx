import React from 'react';
import {Box, Grid} from "@material-ui/core";
import ExampleCard from "./ExampleCard";

const Examples = () => {
    return (
        <div className='max-height-width examples'>
            <Box textAlign={'center'} className='pt-5'>
                Примеры верстки сайтов
            </Box>
            <Grid container className='centered-examples'>
                <Grid item xs={6} className='centered-examples'>
                    <ExampleCard
                        img={'./site1.png'}
                        location={'./Brown_Theme/index.html'}
                    />
                </Grid>
                <Grid item xs={6} className='centered-examples'>
                    <ExampleCard
                        img={'./site2.png'}
                        location={'./White_Gradient/index.html'}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Examples;