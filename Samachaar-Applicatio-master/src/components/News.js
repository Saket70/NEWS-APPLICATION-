import React, { Component } from 'react'
import Bowl from './Bowl';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";



export default class News extends Component {

    static defaultProps = {
        country :"in" ,
        pageSize:8,
        category:"general",
    }
    static propTypes = {
        country : PropTypes.string,
        pageSize: PropTypes.number,
        category : PropTypes.string,
    }

    capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    constructor(props) {
        super(props)
        console.log("Hello i am from  news components");
        this.state = {
            articles: [],
            loading: true,
            page: 1 ,
            totalResults:0
        }
        document.title =`${this.capitalizeFirstLetter(this.props.catagory)}-NewsMonkey`;
    }

//  component did mount function basically ek attribute function hota hai jo render function run ho jaane keh baad run kr raha hota hai.

    async componentDidMount() {
       
 
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b769a18b642d40fea7e30cdde2b1e09d&page=1&pageSize=${this.props.pageSize}`
    

        this.setState({loading:true});

        let data = await fetch(url);

        console.log(data);
        // is data ko json formate meh convert karung jis seh ki woh kuch humare simple response.json() file kaa roop leh lega
        // and simple meh usko this.setState ki madad seh articles naam keh ek empty array meh copy kr dunga.. 
        let parsedData = await data.json();
        
        this.setState({
            articles: parsedData.articles,
             loading:false,
            totalResults: parsedData.totalResults });

    }



    handleNextClick = async () => {
        console.log("next");
        
        if((this.state.page+1) > Math.ceil(this.state.totalResults/this.props.pageSize)){
        }
       //     let url = `https://newsapi.org/v2/everything?q=Artificial%20Intelligence%20&from=2023-03-03&to=2023-03-03&sortBy=popularity&apiKey=b769a18b642d40fea7e30cdde2b1e09d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
else{
      
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b769a18b642d40fea7e30cdde2b1e09d&page=${this.state.page+1}&pageSize=${this.props.pageSize}`

           this.setState({loading:true});
            let data = await fetch(url);


            let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                loading:false,
                articles: parsedData.articles
            })
        }
    }
    

    handlePrevClick = async()=>{
    
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b769a18b642d40fea7e30cdde2b1e09d&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        
        this.setState({loading:true})
   

        let data = await fetch(url);


        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        })
    }
    fetchMoreData = async()=>{
        this.setState({page:this.state.page+1}) 
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b769a18b642d40fea7e30cdde2b1e09d&page=${this.state.pageSize}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : this.state.articles.concat(parsedData.articles),
            totalResults : parsedData.totalResults,
            loading : false
        })
    }

    // async updateNews(){
    //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b769a18b642d40fea7e30cdde2b1e09d&page=${this.state.pageSize}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true});
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         articles : parsedData.articles,
    //         totalResults : parsedData.totalResults,
    //         loading : false
    //     })
    // }




    render() {
        console.log("Render");
        return (
            <div className='container my-3'  >

    



                <hr style={{color : "#f60423"}} />
                <h1
                    className='text-center'
                    style={{
                        "color": "#01f5e8",
    "fontFamily": "cursive",
    "textAlign": "center"
                    }}
                >We Are Serving you : 
                {this.capitalizeFirstLetter(this.props.catagory)}
                
                
                </h1>

                <hr style={{color : "#f60423"}} />
                      
                {this.state.loading &&<Bowl />}
    
{/*   line 100 to 111 helps us to serve the description image title in the cards agar yeh nhi hoga to hume cards nhi dekhega. */}

        
                <div className="row">
                    {

    !this.state.loading         &&                 this.state.articles.map((element) => {

                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title != null ? element.title.slice(0, 45) : ""} description={element.description != null ? element.description.slice(0, 88) : ""}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url} 
                                    author = {element.author}
                                    date = {element.publishedAt}
                                    source={element.source.name}
                                    />     
                            </div>
                        })}
                </div>
                

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-light" onClick={this.handlePrevClick}> &larr;
                        Previous</button>
                        {/* jab bhi meh previous jaunga toh meh page-1 karunga  next page pr jaaunga tb page+1 karunga
                        aur yeh sab this.state.page ki madad seh kr paunga. */}
                     <button disabled={this.state.page+1 > this.state.totalResults/this.props.pageSize} type="button" className="btn btn-light"  onClick={this.handleNextClick}>Next &rarr;</button>
                </div> 




            </div>
        )
    }
}