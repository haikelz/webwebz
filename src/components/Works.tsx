import {FaImage} from 'react-icons/fa';
import HomeButton from './HomeButton';
import { Link } from 'react-router-dom';

const Works = () => {
    return(
    <>
    <section className="works section" id="pictures">
                    <span className="section-subtitle">Berikut beberapa pekerjaan saya</span>
                    <h2 className="section-title">Pictures</h2>

                    <div className="works__container bd-grid">
                        <div className="works__img">
                            <img src="rainygirl-2.jpg" alt="girl" />

                            <div className="works__data">
                                <a href="/" rel="noreferrer" className="works__link"><FaImage /></a>
                                <span className="works__title">Website PT Timah</span>
                            </div>
                        </div>

                        <div className="works__img">
                            <img src="rainygirl-2.jpg" alt="girl" />

                            <div className="works__data">
                                <a href="/" rel="noreferrer" className="works__link"><FaImage /></a>
                                <span className="works__title">Sistem Informasi Karyawan PT Timah</span>
                            </div>
                        </div>

                        <div className="works__img">
                            <img src="rainygirl-2.jpg" alt="girl" />

                            <div className="works__data">
                                <a href="/" rel="noreferrer" className="works__link"><FaImage /></a>
                                <span className="works__title">Sistem Absensi Karyawan Rumah Sakit Bhakti Timah</span>
                            </div>
                        </div>

                        <div className="works__img">
                            <img src="rainygirl-2.jpg" alt="girl" />

                            <div className="works__data">
                                <a href="/" rel="noreferrer" className="works__link"><FaImage /></a>
                                <span className="works__title">Aplikasi Android "Timahku"</span>
                            </div>
                        </div>

                        <div className="works__img">
                            <img src="rainygirl-2.jpg" alt="girl" />

                            <div className="works__data">
                                <a href="/" rel="noreferrer" className="works__link"><FaImage /></a>
                                <span className="works__title">Sistem Informasi Kepegawaian Pemprov Babel</span>
                            </div>
                        </div>

                        <div className="works__img">
                            <img src="rainygirl-2.jpg" alt="girl" />

                            <div className="works__data">
                                <a href="/" rel="noreferrer" className="works__link"><FaImage /></a>
                                <span className="works__title">Website Company PT Sanjoro</span>
                            </div>
                        </div> 
                    </div> 

                </section>
                <Link to='/' className='homeButton'><HomeButton /></Link>
</>
    )
}

export default Works;
