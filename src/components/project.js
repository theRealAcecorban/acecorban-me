const Project = (props) => {

    return (
        <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <img src={props.project.icon} alt={props.project.title} className="projectIcon" />
            </div>
            <div>
                <h3 className="fs-2 text-body-emphasis">{props.project.title}</h3>
                
                <div dangerouslySetInnerHTML={{__html:props.project.summary}}></div>
                { 
                    props.project.link && props.project.link.length > 0 ? 
                    <a href={props.project.link} target={props.project.name} className="btn btn-primary"><i className="bi bi bi-box-arrow-up-right"></i> Open in a New Tab</a> :
                    ""
                }
                
            </div>
        </div>
    )
}

export default Project