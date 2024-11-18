const ProjectCategoryNavigation = (props) => {
    return (
        <a href={"#"+props.projectCategory.name} className={props.projectCategory.navigationButtonClass}>
            <i className={props.projectCategory.icon}></i> 
            {props.projectCategory.title}
        </a>
    )
}

export default ProjectCategoryNavigation