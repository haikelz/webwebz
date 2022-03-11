import { Link } from "react-router-dom";
import NextButton from "./NextButton";

export default function Skills() {
    return (
        <section className="skills section" id="skills">
            <span className="section-subtitle">Beberapa keahlian saya</span>
            <h2 className="section-title">My Skills</h2>

            <div className="skills__container bd-grid">
                <div className="skills__content">

                    <div className="skills__data">
                        <span className="skills__name">Ngoding</span>
                        <span className="skills__number">80%</span>
                        <span className="skills__bar skills__html"></span>
                    </div>

                    <div className="skills__data">
                        <span className="skills__name">Nguli</span>
                        <span className="skills__number">65%</span>
                        <span className="skills__bar skills__cpp"></span>
                    </div>

                    <div className="skills__data">
                        <span className="skills__name">Kepemimpinan</span>
                        <span className="skills__number">75%</span>
                        <span className="skills__bar skills__bash"></span>
                    </div>
                </div>
                <Link className="nextButton" to='/works'><NextButton /></Link>
            </div>
        </section>
    )
}
