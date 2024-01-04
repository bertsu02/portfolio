import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import jsmeter from "../assets/img/js-meter.png"
import htmlmeter from "../assets/img/html-meter.png"
import cssmeter from "../assets/img/css-meter.png"
import reactmeter from "../assets/img/react-meter.png"
import reduxmeter from "../assets/img/redux-meter.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <p>Check out what technologies I know ! </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={jsmeter} alt="meter1"/>
                                    <h5>Java Script</h5>
                                </div>
                                <div className="item">
                                    <img src={htmlmeter} alt="meter2"/>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={cssmeter} alt="meter3"/>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={reduxmeter} alt="meter4"/>
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={reactmeter} alt="meter4"/>
                                    <h5>React</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}