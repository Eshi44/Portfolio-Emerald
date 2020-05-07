import React from 'react';

const Project = (props) => {
    return (
        <div className="column" >
              <a href={props.link} target="_blank"><img className="ProjectPics" src={props.img}/></a>
              <a href={props.link} target="_blank"><h2>{props.title}</h2></a>
              <a href={props.githubUrl} target="_blank"></a>
        </div>
    );
};

export default Project;