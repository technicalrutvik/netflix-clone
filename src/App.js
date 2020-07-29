import React from "react";
import Row from "./Row";
import "./App.css";
import Banner from "./Banner";
import request from "./requests";
import Navbar from "./Nav";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={request.fetchCommedyMovies} />
      <Row title="HorrorMovies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={request.fetchRomanceMovies} />
      {/* <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
