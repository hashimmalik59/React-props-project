import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";


const Card = (props) => {
    return (
        <div className="card">
            <div className="card-upper">
                <div className="header">
                    <div className="img-parent">
                        <img src={props.img} alt="card-logo" />
                    </div>
                    <div className="save">
                        <span>Save</span>
                        <span>
                            <FontAwesomeIcon icon={faBookmark} />
                        </span>
                    </div>
                </div>
                <div className="card-text">
                    <div className="card-post-time">
                        <h3>{props.brandName}</h3>
                        <span>30 days ago</span>
                    </div>
                    <h1 className="card-role">{props.role}</h1>
                    <div className="card-job-timing">
                        <span>{props.jobTime}</span>
                        <span>{props.jobStatus}</span>
                    </div>
                </div>
            </div>
            <div className="card-price">
                <div className="price">
                    <h4>{props.price}</h4>
                    <span className="card-location">{props.location}</span>
                </div>
                <span>Apply Now</span>
            </div>
        </div>
    );
};

export default Card;
