import React from 'react';
import {Grid} from '@material-ui/core'

interface Iintroduction {
    type: 'left' | 'right'
    img: string
    text: string[]
}

const Introduction = (props: Iintroduction) => {
    return (
        props.type === 'left' ?
            <div className='introduction introduction-main'>
                <div className='background-left'/>
                <img
                    className='introduction-image'
                    src={props.img}
                    height='100%'
                    width='100%'
                    alt='picture'
                />
                <Grid container className='introduction'>
                    <Grid item md={6} >
                        <div className='centered-introduction text-purple'>
                            {props.text.map(text =>
                                <div key={text}>
                                    {text}
                                </div>
                            )}
                        </div>
                    </Grid>
                </Grid>
            </div> :
            <div className='introduction'>
                <div className='background-right'/>
                <img
                    className='introduction-image'
                    src={props.img}
                    height='100%'
                    width='100%'
                    alt='picture'
                />
                <Grid container className='introduction'>
                    <Grid item xs={6}/>
                    <Grid item xs={6}>
                        <div className='centered-introduction text-purple'>
                            {props.text.map(text =>
                                <div key={text}>
                                    {text}
                                </div>
                            )}
                        </div>
                    </Grid>
                </Grid>


            </div>
    );
};

export default Introduction;