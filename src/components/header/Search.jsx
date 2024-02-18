import { useContext } from "react";
import SearchImg from "../../assets/icons/search.svg";
import { NewsContext, SearchContext } from "../../contexts";

const Search = () => {
  //main context
  const{news,setNews}= useContext(NewsContext)
  //search context
  const { searchText,setSearchText } = useContext(SearchContext);

  //for sumit handle
  function handleSubmit(e){
    e.preventDefault()
    console.log(searchText)
  }

  //implement debounce
  function debounce(fn, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        fn(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  //search filterd
  function handleFilter(textSearch){
    const filterdSearch = news.filter(singleNews => singleNews.title.toLowerCase().includes(textSearch.trim().toLowerCase()))
    setSearchText([
      ...filterdSearch
    ])
  }

  const debouncedHandleFilter = debounce(handleFilter, 300);

  

  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
      <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[200px]">
        <form action="" onSubmit={handleSubmit} >
          <input
            type="search"
            id="search-dropdown"
            className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
            placeholder="Search Task"
            required
            onChange={e =>debouncedHandleFilter(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
          >
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
