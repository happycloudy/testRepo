import React from 'react';
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: '50%',
        backgroundColor: '#240046',
        color: 'white',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        animation: 'blinkBorder 2s infinite',
        borderRadius: '30px'
    },
    description: {
        fontFamily: 'BM HANNA_TTF',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '48px',
        lineHeight: '48px'
    }
});

interface ISkills {
    skills: string[],
    title: string
}

const SkillsCard = (props: ISkills) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.description} variant="h5" component="h2">
                    {
                        props.skills.map((skill) =>
                            <div key={skill}>
                                <span className='skill'>
                                    {skill}
                                </span>
                            </div>
                        )
                    }
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SkillsCard;