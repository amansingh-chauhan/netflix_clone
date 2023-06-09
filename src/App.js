import logo from './logo.svg';
import './App.css';
import requests from './requests';
import Row from "./Row.js";

import Banner from "./Banner.js";
function App() {
  
  return (
    <div className="App">

      We will rock togethor

      <Banner />

      <Row title = "NETFLIX ORIGINALS" isLargeRow fetchUrl  = {requests.fetchNetflixOriginals} />
      <Row title = "Trending" fetchUrl  = {requests.fetchTrending} />
      <Row title = "Action Movies" fetchUrl  = {requests.fetchActionMovies} />
      <Row title = "Comedy Movies" fetchUrl  = {requests.fetchComedyMovies} />
      <Row title = "Horror Movies " fetchUrl  = {requests.fetchHorrorMovies} />
      <Row title = "Romance Movies" fetchUrl  = {requests.fetchRomanceMovies} />
      <Row title = "Documentaries" fetchUrl  = {requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
