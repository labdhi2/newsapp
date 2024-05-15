import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {
    let  {title, description , imageUrl ,newsUrl} =this.props;
    return (
      <div>
         <div className="card" style={{ width: '18rem' }}>
      <img src={!imageUrl?"https://c.ndtvimg.com/2024-05/m8ttbkj4_night-shift-generic-working-at-night-generic-unsplash_625x300_10_May_24.jpeg?ver-20240506.08":imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target="blank" className="btn btn-dark">Read More</a>
      </div>
    </div>
      </div>
    );
  }
}

export default NewsItem;
