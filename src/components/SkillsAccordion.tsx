import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography} from "@material-ui/core";

const useClasses = makeStyles((theme) => ({
    accordion: {
        backgroundColor: '#240046',
        width: '80%',
        color: 'white',
    },
    title: {
        fontFamily: 'BM HANNA_TTF',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '1.1rem',
    },
    root: {
        fontFamily: 'BM HANNA_TTF',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '1rem'
    }
}))

interface ISkillsAccordion {
    title: string,
    skills: string[]
}

const SkillsAccordion = (props: ISkillsAccordion) => {
    const classesAccordion = useClasses()

    return (

        <Accordion className={classesAccordion.accordion}>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classesAccordion.title}>
                    {props.title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className={classesAccordion.root}>
                    {props.skills.map((skill) =>
                        <>
                            {skill}
                            <br/>
                        </>
                    )}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default SkillsAccordion;