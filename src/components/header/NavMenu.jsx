import React, { useContext } from 'react';
import { NewsContext } from '../../contexts';
import { useNewsQuery } from '../../hooks';


const NavMenu = () => {
  //news contexts
  const {news,setNews} = useContext(NewsContext)

  //custom hook
  const general = useNewsQuery('general')
  const business = useNewsQuery('business')
  const entertainment = useNewsQuery('entertainment')
  const health = useNewsQuery('health')
  const science = useNewsQuery('science')
  const sports = useNewsQuery('sports')
  const technology = useNewsQuery('technology')

  //below all handle click for only nav menu option
  function handleFetch(categoryid){
    
    //replace all data by only  category data
    setNews([
      ...categoryid.allCategoryNews
    ])
  }




  console.log(news)



  // console.log(news)
    return (
        <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
          <li
           onClick={()=>handleFetch(general)}
          >
            <a href="#"  >General</a>
          </li>
          <li
            onClick={()=>handleFetch(business)}
          >
            <a href="#">Business</a>
          </li>
          <li
            onClick={()=>handleFetch(entertainment)}
          >
            <a href="#">Entertainment</a>
          </li>
          <li
            onClick={()=>handleFetch(health)}
          >
            <a href="#">Health</a>
          </li>
          <li
            onClick={()=>handleFetch(science)}
          >
            <a href="#">Science</a>
          </li>
          <li 
            onClick={()=>handleFetch(sports)}
          >
            <a href="#">Sports</a>
          </li>
          <li
            onClick={()=>handleFetch(technology)}
          >
            <a href="#">Technology</a>
          </li>
        </ul>
    );
};

export default NavMenu;