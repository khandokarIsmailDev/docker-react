import React, { useReducer, useState } from 'react';
import { NewsContext } from '../contexts';
import { initialState, newsReducer } from '../reducers/NewsReducers';


const NewsProvider = ({children}) => {
    const [news,setNews] = useState([])


    return (
        <NewsContext.Provider value={{news,setNews}}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;