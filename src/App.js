import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import Api from './config/api';

function App() {
  return (
    <div className="App">
      <Row Title="Trending Movies" fetchApi={Api.fetchTrending} isLarge={true}/>
      <Row Title="Netflix Originals" fetchApi={Api.fetchNetflixOriginals} isLarge={false} />
      <Row Title="Top Rated" fetchApi={Api.fetchTopRated} isLarge={false}/>
      <Row Title="Action Movies" fetchApi={Api.fetchActionMovies} isLarge={false}/>
      <Row Title="Comedy Movies" fetchApi={Api.fetchComedyMovies} isLarge={false}/>
       <Row Title="Horror Movies" fetchApi={Api.fetchHorrorMovies} isLarge={false}/>
       <Row Title="Romance Movies" fetchApi={Api.fetchRomanceMovies} isLarge={false}/>
       <Row Title="Documentaries Movies" fetchApi={Api.fetchDocumentaries} isLarge={false}/>
    </div>
  );
}

export default App;
