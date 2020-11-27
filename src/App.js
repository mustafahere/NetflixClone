import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import Api from './config/api';

function App() {
  return (
    <div className="App">
      <Row Title="Trending Movies" fetchApi={Api.fetchTrending} isLarge/>
      <Row Title="Netflix Originals" fetchApi={Api.fetchNetflixOriginals}/>
      <Row Title="Top Rated" fetchApi={Api.fetchTopRated} />
      <Row Title="Action Movies" fetchApi={Api.fetchActionMovies} />
      <Row Title="Comedy Movies" fetchApi={Api.fetchComedyMovies} />
       <Row Title="Horror Movies" fetchApi={Api.fetchHorrorMovies}/>
       <Row Title="Romance Movies" fetchApi={Api.fetchRomanceMovies}/>
       <Row Title="Documentaries Movies" fetchApi={Api.fetchDocumentaries}/>
    </div>
  );
}

export default App;
