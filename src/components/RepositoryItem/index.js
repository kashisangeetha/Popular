// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    imageUrl,
    starsCount,
    forksCount,
    issuesCount,
  } = repositoryDetails

  return (
    <li className="list">
      <img src={imageUrl} className="img" alt={name} />
      <h1 className="heading">{name}</h1>
      <div className="stars">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="star-img"
        />
        <p className="text">{starsCount} starts</p>
      </div>
      <div className="forks">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="forks-img"
        />
        <p className="text">{forksCount} forks</p>
      </div>
      <div className="issues">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt=" open issues"
          className="issues-img"
        />
        <p className="text">{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
