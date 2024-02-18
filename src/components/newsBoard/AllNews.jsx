import React, { useContext, useEffect, useState } from 'react';
import {useNewsQuery} from './../../hooks';
import { NewsContext, SearchContext } from '../../contexts';
import ThumbImg from "../../assets/thumb.png"

const AllNews = () => {
  const {news,setNews} = useContext(NewsContext)
  const {searchText,setSearchText}= useContext(SearchContext)
  
    
  // category based custom api
    const general = useNewsQuery('general')
    const business = useNewsQuery('business')
    const entertainment = useNewsQuery('entertainment')
    const health = useNewsQuery('health')
    const science = useNewsQuery('science')
    const sports = useNewsQuery('sports')
    const technology = useNewsQuery('technology')

  useEffect(() => {

    const abortController = new AbortController();

    async function fetchData() {
      try {
        
        // set multiple array in one array, similar like push
        const newsAll = [
          general.allCategoryNews,
          business.allCategoryNews,
          entertainment.allCategoryNews,
          health.allCategoryNews,
          science.allCategoryNews,
          sports.allCategoryNews,
          technology.allCategoryNews
        ].flat();
        
        searchText.length?setNews(searchText):setNews(newsAll)
  
        // setNews(newsAll);
      } catch (error) {
        console.error("Error fetching newg:", error);
      }
    }
  
    fetchData();
    console.log('done')

    //clean up
    return () => {
      abortController.abort();
    };
  }, [searchText,business.allCategoryNews, entertainment.allCategoryNews, general.allCategoryNews, health.allCategoryNews, science.allCategoryNews, sports.allCategoryNews, technology.allCategoryNews]);


  



// console.log(news)


  // console.log(general.allCategoryNews)
    return (
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
          

         {
          news.map(singleNews =>(
            <div key={crypto.randomUUID()} className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
            {/* info */}
            <div className="col-span-12 md:col-span-6">
              <a href={singleNews['url']} target='none'>
                <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                  {singleNews['title']}
                </h3>
              </a>
              <p className="text-base text-[#292219]">
                {singleNews?.description}
              </p>
              <p className="mt-5 text-base text-[#5C5955]">{new Date(singleNews['publishedAt'])?.toLocaleDateString() } AT {new Date(singleNews['publishedAt'])?.toLocaleTimeString()} </p>
            </div>
            {/* thumb */}
            <div className="col-span-12 md:col-span-6">
              <img className="w-full" src={singleNews['urlToImage']??ThumbImg} alt="thumb" />
            </div>
          </div>
          ))
         }
        </div>
    );
};

export default AllNews;