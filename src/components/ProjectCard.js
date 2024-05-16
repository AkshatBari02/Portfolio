import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const ProjectCard = ({route, imgUrl, title, description,projectId}) => {

    const [effectApplied, setEffectApplied] = useState(false);

    const location = useLocation();

    const handleClick = () => {
        setEffectApplied(true);
    };

    
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span><br/>
                    <Link to={route}>View Project</Link>
                    <br/>
                    <Link to={`/watch-video/${projectId}`} onClick={handleClick}>Watch Video</Link>
                </div>
            </div>
            {effectApplied && (
                <style>
                    {`
                        #home, #navbar, #skills, #projects, #connect, #resumeBar, #footer {
                            display: none;
                        }
                    `}
                </style>
            )}
        </Col>
    )
}