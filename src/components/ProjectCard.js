import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({route, imgUrl, title, description}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span><br/>
                    <Link to={route}>View Project</Link>
                </div>
            </div>
        </Col>
    )
}