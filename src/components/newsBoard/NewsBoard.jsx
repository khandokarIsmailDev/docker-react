import React, { useContext } from "react";
import AllNews from "./AllNews";
import SideBar from "./SideBar";

const NewsBoard = () => { 

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* left */}
        <AllNews/>
        {/* right */}
        <SideBar/>
      </div>
    </main>
  );
};

export default NewsBoard;
