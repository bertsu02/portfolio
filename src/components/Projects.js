import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import metlanding from "../assets/img/MET-landing.png";
import todo from "../assets/img/todo.png";
import romex from "../assets/img/romex.png";
import kevin from "../assets/img/kevin.png";
import { ProjectCard } from "./ProjectCard";
import gadgets from "../assets/img/nice-gadgets.png";
export const Projects = () => {
    const projects = [
        {
            title: "MET Landing Page",
            description: "Made in HTML/SCSS/BEM",
            imgUrl: metlanding,
            url: "https://bertsu02.github.io/metlanding/",
        },
        {
            title: "Todo App",
            description: "Made in React",
            imgUrl: todo,
            url: "https://bertsu02.github.io/todo/",
        },
        {
            title: "Nice Gadgets",
            description: "Made in React,SCSS,zustand and express",
            imgUrl: gadgets,
            url:"https://pl-fe-sep23-reactivation.github.io/product-catalog/",
        },
        {
            title: "Romex Landing Page",
            description: "Wordpress Landing Page",
            imgUrl: romex,
            url:"http://romex-asenizacja.pl/",
        },
        {
            title: "Streamer tools",
            description: "Made in HTML,CSS,JS",
            imgUrl: kevin,
            url:"https://kevin-tools.vercel.app/",
        },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg3,
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg3,
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg3,
        // },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p> Projects that I have done, I hope to expand this with your help!</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item> */}
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">second</Tab.Pane>
                            <Tab.Pane eventKey="third">third</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}