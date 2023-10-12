function Project(props) {


    return <>
        <div className="item">
            <h3><a href={props.github}>{props.title}</a></h3><a href={props.deployed}><img id="image" src={props.image} alt={props.altText}></img></a>
        </div>
    </>
}

export default Project;