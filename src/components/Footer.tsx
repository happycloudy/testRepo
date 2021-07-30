import React from 'react';
import {Grid} from "@material-ui/core";
import FooterElement from "./FooterElement";

const Footer = () => {
    return (
        <footer>
            <div className="footer-grid-wrap">
                <Grid container className='footer-grid'>
                    <FooterElement img={'./github.png'} url={'http://www.github.com/happycloudy'}/>
                    <FooterElement img={'./telegram.png'} url={'@Happycloudy'}/>
                    <FooterElement img={'./mail.png'} url={'arion.mikola@gmail.com'}/>
                    <FooterElement img={'./phone.png'} url={'+7-999-913-12-69'}/>
                </Grid>
            </div>
        </footer>
    );
};

export default Footer;