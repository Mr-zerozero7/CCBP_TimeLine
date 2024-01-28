// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, tagsList, description, duration} = courseDetails
  //   console.log(tagsList)
  //   categoryId,titel,

  return (
    <div className="course-item-container">
      <div className="card-top-section">
        <h2 className="title-heading">{courseTitle}</h2>
        <p className="duration">
          <AiFillClockCircle className="react-icons" />
          {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <div className="technologies-container">
        {tagsList.map(eachItem => (
          <p className="technology" key={eachItem.id}>
            {eachItem.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
