import React from 'react'
import NewsItems from './NewsItems';
import Spiner from './Spiner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { useEffect } from 'react';

const News = (props) => {
  // article = [
  //   {
  //     "source": {
  //       "id": "lequipe",
  //       "name": "L'equipe"
  //     },
  //     "author": "L'EQUIPE",
  //     "title": "Programme TV foot : à quelle heure et sur quelle chaîne voir les matchs de ce soir (29 décembre ${props.pageSize}22) ?",
  //     "description": "Retrouvez l'intégralité des retransmissions des matches de football du jour retransmis sur toutes les chaînes du bouquet TNT, Câble et Satellite. Ligue 1, Ligue 2, Premier League, coupes d'Europe... Suivez tous les matches en direct sur votre télévision ou en…",
  //     "url": "https://www.lequipe.fr/Football/Actualites/Programme-tv-foot-a-quelle-heure-et-sur-quelle-chaine-voir-les-matchs-de-ce-soir-29-decembre-${props.pageSize}22/1371987",
  //     "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/-/1500000001560312/4:0,2500:1664-640-427-75/16a19.jpg",
  //     "publishedAt": "${props.pageSize}22-12-29T06:15:04+00:00",
  //     "content": "Championnat d'Espagne : 15e journée \r\n- Gérone - Rayo Vallecano : à 17 heures en direct sur beIN Sports 4 - Betis Séville - Athletic Bilbao : à 19h15 en direct sur beIN Sports 2 - Atlético de Madrid … [+44 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-irish-times",
  //       "name": "The Irish Times"
  //     },
  //     "author": "Ciarán Murphy",
  //     "title": "Anton O’Toole’s example permeates Templeogue Synge Street even after he’s gone",
  //     "description": "O’Toole and Donal Colfer a lineage that joins Dublin’s two finest football teams of the last 100 years",
  //     "url": "https://www.irishtimes.com/sport/gaelic-games/${props.pageSize}22/12/29/anton-otooles-example-permeates-templeogue-synge-street-even-after-hes-gone/",
  //     "urlToImage": "https://www.irishtimes.com/resizer/0mxSLDamyLYwZ5c5-3rR5M6GE7s=/1${props.pageSize}0x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/MXUA3A3TWNB53I3IYAYMGGBDWE.jpg",
  //     "publishedAt": "${props.pageSize}22-12-29T06:00:00Z",
  //     "content": "We are all of us prisoners of our own backgrounds. In a country as small as Ireland, theres really no such thing as describing your home place as oh, its somewhere youve never heard of. Just try me, … [+4762 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "fox-sports",
  //       "name": "Fox Sports"
  //     },
  //     "author": "RJ Young",
  //     "title": "College Football Playoff semifinals: 3 keys for each team",
  //     "description": "Can Ohio State stun Georgia? Can Michigan take the next step by handling TCU? RJ Young looks at the keys for each team in the CFP semis.",
  //     "url": "http://www.foxsports.com/stories/college-football/college-football-playoff-semifinals-preview-3-keys-for-each-team",
  //     "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/${props.pageSize}22/12/1408/814/22c5338f-12.3.22_RJ-Young-Picks-Every-Bowl-Game_16x9.jpg?ve=1&tl=1",
  //     "publishedAt": "${props.pageSize}22-12-28T22:29:41Z",
  //     "content": "After a long, exciting college football season, it's come down to this: Four teams competing in the College Football Playoff semifinals on Saturday, each hoping to earn a chance to face off for a sho… [+9871 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "fox-sports",
  //       "name": "Fox Sports"
  //     },
  //     "author": null,
  //     "title": "Wednesday Bowl Game highlights: Military Bowl and more",
  //     "description": "The ${props.pageSize}22 college football bowl season is starting to heat up with four exciting matchups taking place on Wednesday.",
  //     "url": "http://www.foxsports.com/stories/college-football/wednesday-bowl-game-highlights",
  //     "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/${props.pageSize}22/12/1408/814/333642B2-6E61-4102-8136-D47C21E0E395.jpeg?ve=1&tl=1",
  //     "publishedAt": "${props.pageSize}22-12-28T19:27:21Z",
  //     "content": "The ${props.pageSize}22 college football bowl season is starting to heat up with four exciting matchups taking place on Wednesday, including the Holiday Bowl on FOX.\r\nUCF (9-4) and Duke (8-4) kick the day off when … [+822 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bleacher-report",
  //       "name": "Bleacher Report"
  //     },
  //     "author": "David Kenyon",
  //     "title": "B/R's College Football Weekly Awards: Bowl Season Part 2",
  //     "description": "The ${props.pageSize}22 college football bowl season has rolled along with a handful of entertaining and feel-good storylines. In this second, early window of matchups, the...",
  //     "url": "https://bleacherreport.com/articles/10059868-brs-college-football-weekly-awards-bowl-season-part-2",
  //     "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_${props.pageSize}00,q_95/v1672166650/wlafeym2i2l23ownvetg.jpg",
  //     "publishedAt": "${props.pageSize}22-12-28T14:01:31Z",
  //     "content": "AP Photo/Rogelio V. Solis\r\nFarewell of the Week: Houston Exits AAC With a Win\r\nHouston fell short of preseason expectations, but it wrapped up the ${props.pageSize}22 campaign on a high note. Now headed to the Big … [+1091 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "fox-sports",
  //       "name": "Fox Sports"
  //     },
  //     "author": "Bryan Fischer",
  //     "title": "How Michigan, Ohio State, TCU and Georgia reached the College Football Playoff",
  //     "description": "Each national semifinalist took a different path to the CFP, but now each believes it can come away with the big trophy.",
  //     "url": "http://www.foxsports.com/stories/college-football/how-michigan-ohio-state-tcu-and-georgia-reached-the-${props.pageSize}23-college-football-playoff",
  //     "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/${props.pageSize}22/12/1408/814/12.27.22_CFP-Preview_16x9.jpg?ve=1&tl=1",
  //     "publishedAt": "${props.pageSize}22-12-28T12:49:21Z",
  //     "content": "At Jim Harbaugh's introductory news conference at Michigan, optimism around his alma mater ran high.\r\nOne reporter relayed that the fan base was labeling him the messiah, arriving in Ann Arbor not ju… [+16174 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bleacher-report",
  //       "name": "Bleacher Report"
  //     },
  //     "author": "Morgan Moriarty",
  //     "title": "College Football Picks for Every Game: CFB Playoff and New Year's Six",
  //     "description": "College football's bowl season is about to reach some of its biggest games. From Dec. 30 through Jan. 2, college football's New Year's Six bowl games—including...",
  //     "url": "https://bleacherreport.com/articles/10059913-college-football-picks-for-every-game-cfb-playoff-and-new-years-six",
  //     "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_${props.pageSize}00,q_95/v1672178292/sdxv3t3zltvhe14jf6x3.jpg",
  //     "publishedAt": "${props.pageSize}22-12-28T12:00:00Z",
  //     "content": "Todd Kirkland/Getty Images\r\nSugar Bowl:Alabama vs. Kansas State When: Noon (ESPN) Line: Alabama -6.5\r\nAlabama won't be playing for a national championship this season thanks to its two losses to Tenn… [+5563 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
  //     "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
  //     "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
  //     "publishedAt": "${props.pageSize}${props.pageSize}-04-27T07:${props.pageSize}:43Z",
  //     "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
  //   }
  // ]

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


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

  // handlePrevious = async () => {
  //   //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ky}&page=${page - 1}&pageSize=${props.pageSize}`;
  //   //   // this.setState({loading: true})
  //   //   // let data = await fetch(url);
  //   //   // let parseData = await data.json();
  //   //   // console.log(parseData);
  //   //   // this.setState({ articles: parseData.articles, page: page - 1, loading: false })
  //   this.setState({ page: page - 1 });
  //   this.updateNews();
  // }

  // handleNext = async () => {
  //   //   // if (!(page + 1 > Math.ceil(totalResults/props.pageSize))) {
  //   //   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ky}&page=${page + 1}&pageSize=${props.pageSize}`;
  //   //   //   this.setState({loading: true});
  //   //   //   let data = await fetch(url);
  //   //   //   let parseData = await data.json();
  //   //   //   console.log(parseData);
  //   //   //   this.setState({ articles: parseData.articles, page: page + 1, loading: false })
  //   //   // }
  //   this.setState({ page: page + 1 });
  //   this.updateNews();

  // }

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
