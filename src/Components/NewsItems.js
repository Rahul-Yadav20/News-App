import React from 'react'

const NewsItems = (props) => {

    let { title, discription, imgUrl, url, author, date, source, badgeColor } = props;
    
    return (
      <div className='my-2'>
        <div className="card">
          <div style={{
            display: 'flex', 
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
            <span className={`badge rounded-left bg-${badgeColor}`}>{source}</span>
          </div>

          <img src={!imgUrl ? "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" : imgUrl} alt="..." className='card-img-top' />
          <div className={`card-body bg-${props.mode === "dark" ? "dark" : "light"} text-${props.mode === "dark" ? "light" : "dark"}`}>
            <h5 className={`card-title`}>{title}...</h5>
            <p className="card-disc">{discription}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={url} target="_blank" rel='noreferrer' className={`btn btn-sm btn-${badgeColor}`}>Read more</a>
          </div>
        </div>
      </div>
    )
}
export default NewsItems
