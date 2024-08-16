import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {
        let { title, description, newsUrl, imageUrl, author, date, source } = this.props;

        return (

            // style = {{width: "18rem"}}
            <div className='my-3'>
                <div className="card" >
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1" ,fontFamily:"apple" ,
                color:"cadet"}}>
                            {source}
                                </span>
                    <img src={imageUrl == null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNzqRQj0QcQ2Xcf4mp7bFfhU4XibE0M6RK4hJ8tqWGw&s" : imageUrl}



                        className="card-img-top" alt="..." />
                    <div className="card-body">
                   
                        <h5 className="card-title">{title}
                      
                      
                               
                            ...</h5> 
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small class="text-muted">By{author == null ? "unknown" : author} on {date}</small></p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark
                         btn-primary">Read More...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
