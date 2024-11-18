import Project from './project'

const ProjectCategorySection = (props) => {

    return (
        <>
            <div className="b-example-divider"></div>
            <a name={props.projectCategory.name}></a>
            <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom" style={{color: props.projectCategory.titleColor}}>
                    <i className={props.projectCategory.icon}></i> 
                    {props.projectCategory.title}
                </h2>
                <div className={"row g-4 py-5 row-cols-1 row-cols-lg-"+props.projectCategory.projects.length}>

                {props.projectCategory.projects.map((project) => <Project key={project.name} project={project} />)}

                </div>
                <div className="container">
                    <p className="float-end"><a href="#top">Back to top</a></p>
                </div>
            </div>
        </>
    )
}

export default ProjectCategorySection