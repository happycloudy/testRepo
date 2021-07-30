import React, {useState} from 'react';
import {Grid, Tooltip} from "@material-ui/core";

interface IFooterElement {
    img: string,
    url: string
}


const FooterElement = (props: IFooterElement) => {
    const [active, setActive] = useState(false)
    const [toolTip, setToolTip] = useState(true)

    const handleClickXs = async (url: string) => {
        await navigator.clipboard.writeText(url)
        await setToolTip(true)
        await setTimeout(() => {
            setToolTip(false)
        }, 1500)

    }

    const handleClick = async (url: string) => {
        await navigator.clipboard.writeText(url)
        await setToolTip(true)
        await setTimeout(() => {
            setToolTip(false)
        }, 1500)
    }


    return (
        <>
            {
                window.innerWidth > 480 ?
                    active ?
                        <>
                            <Grid item xs className='footer-grid-items spin-item'>
                                <img
                                    onClick={() => setActive(false)}
                                    src={props.img}
                                    className={'footer-grid-img'}
                                    alt={'footerImg'}
                                />
                            </Grid>
                            <Grid item xs className='footer-grid-items'>
                                <span className='footer-grid-text' onClick={() => handleClick(props.url)}>
                                    {props.url}
                                </span>
                            </Grid>
                        </>
                        :
                        <Grid item xs className='footer-grid-items anti-spin-item'>
                            <img
                                onClick={() => setActive(true)}
                                src={props.img}
                                className={'footer-grid-img'}
                                alt={'footerImg'}
                            />
                        </Grid>
                    :
                    <>
                        <Tooltip
                            PopperProps={{
                                disablePortal: true,
                            }}
                            onClose={() => {
                                setToolTip(false)
                            }}
                            open={toolTip}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="Скопировано">

                            <Grid item xs className='footer-grid-items anti-spin-item'>
                                <img
                                    onClick={() => handleClickXs(props.url)}
                                    src={props.img}
                                    className={'footer-grid-img'}
                                    alt={'footerImg'}
                                />
                            </Grid>

                        </Tooltip>

                    </>
            }
        </>
    );
}

export default FooterElement;