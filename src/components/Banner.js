import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import headerImg from "../assets/img/header-img1.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const period = 1000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let counter = setInterval(() => {
            count();
        }, delta)

        return () => { clearInterval(counter) };
    },)

    const count = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                                    <div id="intro">
                                    <h1>{`Hi I'm Bartek - `}<span className="wrap"><br></br>{text}</span></h1>
                                    <p>I've been passionate about IT for a long time, but just recently I found out my calling in Front-End. I love to make unorthodox websites that leave people thinking - "How did he do that?". </p>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Banner img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}