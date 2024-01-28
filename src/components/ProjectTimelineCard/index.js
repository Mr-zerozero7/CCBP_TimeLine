// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    categoryId,
    projectTitle,
    imageUrl,
    projectUrl,
    description,
    duration,
  } = projectDetails
  console.log(projectTitle)
  return (
    <div className="project-item">
      <img className="project-image" src={imageUrl} alt={categoryId} />
      <div className="heading-container">
        <h1 className="heading">{projectTitle}</h1>
        <p className="duration">
          <AiFillCalendar classNAme="react-icons" /> {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <a className="visit-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
