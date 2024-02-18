import { useContext } from "react";
import { NewsContext } from "../../contexts";
import ThumbImg from '../../assets/thumb.png'



const SideBar = () => {

  const {news} = useContext(NewsContext)

    return (
        <div className="col-span-12 self-start xl:col-span-4">
          <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
          
          {
            news.map((singleNews,index)=>{
              if(index >10 && index <15){
                return (
                  <div key={crypto.randomUUID()} className="col-span-12 mb-6 md:col-span-8">
                    <img className="w-full" src={singleNews['urlToImage'] ?? ThumbImg} alt="thumb" />
                    {/* info */}
                    <div className="col-span-12 mt-6 md:col-span-4">
                      <a href="#">
                        <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                          {singleNews['title']}
                        </h3>
                      </a>
                      <p className="text-base text-[#292219]">
                        {singleNews['description']}
                      </p>
                      <p className="mt-5 text-base text-[#94908C]">{new Date(singleNews['publishedAt']).toLocaleDateString()}</p>
                    </div>
                  </div>
                )
              }
            })
          }

          
           
          </div>
        </div>
    );
};

export default SideBar;