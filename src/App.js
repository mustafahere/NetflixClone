import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import ModalComponent from "./components/Modal";
import NavBar from "./components/NavBar";
import Row from "./components/Row";
import { requests } from "./config/api";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [modalId, setModalId] = useState(null);

  const openModal = (id) => {
    setModalId(id);
    setIsModal(true);
  };

  const closeModal = () => {
    setModalId(null);
    setIsModal(false);
  };

  return (
    <div className="App">
      <NavBar />
      <Banner fetchApi={requests.fetchTrending} />
      <ModalComponent
        isModal={isModal}
        closeModal={closeModal}
        modalId={modalId}
      />
      <Row
        Title="Trending Movies"
        fetchApi={requests.fetchTrending}
        isLarge={true}
        openModal={openModal}
      />
      <Row
        Title="Netflix Originals"
        fetchApi={requests.fetchNetflixOriginals}
        isLarge={false}
        openModal={openModal}
      />
      <Row
        Title="Top Rated"
        fetchApi={requests.fetchTopRated}
        isLarge={false}
        openModal={openModal}
      />
      <Row
        Title="Action Movies"
        fetchApi={requests.fetchActionMovies}
        isLarge={false}
        openModal={openModal}
      />
      <Row
        Title="Comedy Movies"
        fetchApi={requests.fetchComedyMovies}
        isLarge={false}
        openModal={openModal}
      />
      <Row
        Title="Horror Movies"
        fetchApi={requests.fetchHorrorMovies}
        isLarge={false}
        openModal={openModal}
      />
      <Row
        Title="Romance Movies"
        fetchApi={requests.fetchRomanceMovies}
        isLarge={false}
        openModal={openModal}
      />
      <Row
        Title="Documentaries Movies"
        fetchApi={requests.fetchDocumentaries}
        isLarge={false}
        openModal={openModal}
      />
      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        Design and Developer by{" "}
        <a href="https://mustafaahere.web.app">mustafahere</a>
      </p>
    </div>
  );
}

export default App;
