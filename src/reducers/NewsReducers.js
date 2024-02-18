

const initialState ={
    allNews:[]
}

const newsReducer = (state,action)=>{
    switch(action.type){
        case "ADD_ALL_NEWS":
            return{
                allNews: [...state.allNews,action.payload]
            }
            break;


        default:
            return state;
    }
}


export {
    initialState,
    newsReducer
}