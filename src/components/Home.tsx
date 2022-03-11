import {FaInstagram, FaFacebook, FaGithub, FaDribbble} from 'react-icons/fa';
import NextButton from './NextButton';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
<main className="l-main">
            
            <section className="home" id="home">
                <div className="home__container bd-grid">
                    <div className="home__data">
                        <div className="home__img">
                            <img src="https://avatars.githubusercontent.com/u/77146709?v=4" alt="" />
                        </div>

                        <h1 className="home__title">Yuu Harisawa</h1>
                        <span className="home__profession">Fullstack Engineer</span>

                        <div className="home__social">
                            <a href="https://facebook.com/" target="blank" rel="noreferrer" className="home__social-link"><FaFacebook /></a>
                            <a href="https://instagram.com/" target="blank" rel="noreferrer" className="home__social-link"><FaInstagram /></a>
                            <a href="https://github.com/haikelz" target="blank" rel="noreferrer" className="home__social-link"><FaGithub /></a>
                            <a href="https://dribbble.com/" target="blank" rel="noreferrer" className="home__social-link"><FaDribbble /></a>
                        </div> 
                        <Link to='/about'><NextButton /></Link>
                  </div>
                </div>
            </section>
            </main>
    )
}

export default Home;
