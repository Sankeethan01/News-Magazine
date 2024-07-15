/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{maxWidth:"333px"}}>
    <img src={src?src:`https://www.shutterstock.com/image-vector/vector-logo-news-symbol-icon-260nw-434775250.jpg`}  className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):"News dont have enough description."}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  </div>
  )
}

export default NewsItem


