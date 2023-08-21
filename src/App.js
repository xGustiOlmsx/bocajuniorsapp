import './App.css';
import Header from './components/Header'
import Noticias from './components/Noticias'
import NoticiasPrincipales from './components/NoticiasPrincipales';
import Resultados from './components/Resultados'

function App() {
  return (
    <div className="App">
      <Header />
      <NoticiasPrincipales/>
      <Noticias/>
      <Resultados/>
    </div>
  );
}

export default App;
