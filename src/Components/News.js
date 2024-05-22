import React from 'react'
import NewsItems from './NewsItems';
import Spiner from './Spiner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { useEffect } from 'react';

const News = (props) => {
 

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // Capitalize first letter of heading 
  const capitalizeTitle = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  document.title = `NewsAdda - ${capitalizeTitle(props.category)}`;


  const updateNews = async () => {
    props.setProg(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ky}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    props.setProg(60);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProg(100);
  }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  

  const fetchMoreData = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ky}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  }




  return (
    <>
      

        <h2 className={`text-center text-${props.mode === "dark" ? "white" : "dark"}`} style={{ margin: "20px 0px", marginTop: "70px" }}>Top {capitalizeTitle(props.category)} Headlines</h2>
        
          
  

      {loading && <Spiner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spiner />}
      >
        <div className="container mb-4">
          <div className="row">
            {articles.map((element, index) => {
              return <div className="col-md-4" key={index}>
                <NewsItems title={element.title} discription={element.description} imgUrl={element.urlToImage} url={element.url} mode={props.mode} author={element.author} date={element.publishedAt} source={element.source.name} badgeColor={props.badgeColor} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )

}

News.defualtProps = {

  pageSize: 10,
  category: 'general',
  badgeColor: 'danger',
}

News.propTypes = {
  country: PropTypes.string,
  ky: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
