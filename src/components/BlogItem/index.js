// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {postDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = postDetails
  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="blogItem-container">
        <img className="item-image" src={imageUrl} alt={`item${id}`} />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h4 className="item-title">{title}</h4>
          <div className="author-info">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
