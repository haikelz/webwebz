import { Link } from "react-router-dom";
import NextButton from "./NextButton";

const About = () => {
  return (
    <section className="about section" id="about">
                <span className="section-subtitle">Perkenalan</span>
                <h2 className="section-title">About Me</h2>

                <div className="about__container bd-grid">
                    <div className="about__data">
                        <p className="about__description">Hai. Saya Yuu, seorang Fullstack Engineer di PT Timah TBK. Dikala tidak bekerja, saya biasanya menjalani kerjaan sampingan saya sebagai Freelance Front End Developer.</p>
                        <img src="assets/img/about.png" alt="" className="about__img" />
                        <Link to='/skills'><NextButton /></Link>
                    </div>
                </div>
    </section>
  );
}

export default About;
