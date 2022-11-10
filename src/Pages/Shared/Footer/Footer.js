import React from 'react';
import './Footer.css'
const Footer = () => {

    return (
        <div className='footer-main'>

            <footer>
                <div className="footer-content">
                    <h3>Lazy Developer</h3>
                    <p>Moment's Factory is a personal website developed by Jafrin. I love to capture photos on various occasion and enjoy my work flauntlessly </p>
                    <ul className="socials">
                        <li><a href="https://www.facebook.com/10minuteschool"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/10ms_insta/?fbclid=IwAR0-kg6VrR-cNhsrUYycp1AHG7gUFaPPRJPDGf44k_B1xuTwzFXD11XlZBo"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/10ms_insta/?fbclid=IwAR0-kg6VrR-cNhsrUYycp1AHG7gUFaPPRJPDGf44k_B1xuTwzFXD11XlZBo"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="https://www.youtube.com/c/10MinuteSchoolMain"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/10ms/?fbclid=IwAR3maQ75NlD5oM_Sm8fDzLn9-O3p4QZPNYKHd7IISO0ksrVqwjNH1QrFqkc"><i className="fa fa-linkedin-square"></i></a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <div className="footer-menu">
                        <ul className="f-menu">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/courseCategories">Services</a></li>
                            <li><a href="/review">Review</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </div>
                    <p>copyright &copy; <a href="https://www.facebook.com/10minuteschool">Lazy Developer</a> </p>
                </div>
            </footer>


        </div>
    );
};

export default Footer;