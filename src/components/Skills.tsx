import React from 'react';
import {Box, Grid, makeStyles} from "@material-ui/core";
import SkillsCard from "./SkillsCard";
import SkillsAccordion from "./SkillsAccordion";

const useClasses = makeStyles((theme) => ({
    accordions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '80%'
    }
}))


const Skills = () => {
    let frontendSkills: string[] = ['Javascript', 'Typescript', 'React', 'Redux', 'React-Bootstrap', 'Material-UI']
    let backendSkills: string[] = ['Node', 'Express', 'Nest', 'SQL & NoSQL', 'ORMs']
    const classesAccordion = useClasses()


    return (
        <div className='max-height-width skills' id='skills'>
            <Box textAlign={'center'} className='pt-5'>
                Скиллы
            </Box>
            {
                window.innerWidth > 480 ?
                    <>
                        <Grid container>
                            <Grid item md={6} xs={12} className='centered-skills skills-title'>
                                Frontend
                            </Grid>
                            <Grid item md={6} xs={12} className='centered-skills skills-title'>
                                Backend
                            </Grid>
                        </Grid>

                        <Grid container className='centered-skills'>
                            <Grid item md={6} xs={12} className='centered-skills'>
                                <SkillsCard
                                    title={'Frontend'}
                                    skills={frontendSkills}
                                />
                            </Grid>

                            <Grid item md={6} xs={12} className='centered-skills'>
                                <SkillsCard
                                    title={'Backend'}
                                    skills={backendSkills}
                                />
                            </Grid>
                        </Grid>
                    </> :

                    <div className={classesAccordion.accordions}>
                        <SkillsAccordion
                            title={'Frontend'}
                            skills={frontendSkills}
                        />

                        <SkillsAccordion
                            title={'Backend'}
                            skills={backendSkills}
                        />
                    </div>
            }


        </div>
    );
}

export default Skills;