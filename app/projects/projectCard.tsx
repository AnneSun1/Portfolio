import './styles.css';

interface ProjectCardParams {
    title: string;
    summary: string;
    description: string;
    link: string;
    image: string;
}
const projectCard = ({title, summary, description, link, image} : ProjectCardParams) => {
    return (
        <div className="project-card">
            <h1 className="mb-2">{title}</h1>
            <h1 className="mb-5">{summary}</h1>
            <a href={link} target="_blank">
                <div className="description-container">
                    <img src={image}></img>
                </div>  
            </a>
    </div>
    )
}

export default projectCard;