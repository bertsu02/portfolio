import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="img url" />
                <div className="proj-txtx">
                    <h4><a href={url}>{title}</a></h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}