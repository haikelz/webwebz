import {FaInstagram, FaGithub, FaFacebook} from 'react-icons/fa';

const Footer = () => {
const date = new Date();
    return(
<footer className="footer section">
            <div className="footer__container bd-grid">
                <h1 className="footer__title">Y U U</h1>
                <p className="footer__description">Seseorang di Era Industri 4.0 </p>

                <div className="footer__social">
                    <a href="https://facebook.com/" className="footer__link"><FaFacebook /></a>
                    <a href="https://instagram/com/" className="footer__link"><FaInstagram /></a>
                    <a href="https://github.com/haikelz" className="footer__link"><FaGithub /></a>
                </div>

                <p className="footer__copy"> © 2021-{date.getFullYear()}. Made with Love by Yuu</p>
            </div>
        </footer>
    )
}

export default Footer;
