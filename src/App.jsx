import React from "react";
import Header from "./components/header/Header";
import NewsBoard from "./components/newsBoard/NewsBoard";
import Footer from "./components/Footer";
import { NewsProvider, SearchProvider } from "./provider";

const App = () => {
  return (
    <SearchProvider>
      <NewsProvider>
        <Header />
        <NewsBoard />
        <Footer />
      </NewsProvider>
    </SearchProvider>
  );
};

export default App;
