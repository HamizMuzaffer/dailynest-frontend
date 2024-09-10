import { SiteFooter } from './components/static/Footer';
import Hero from './components/static/Hero';
import NavBar from './components/static/NavBar';

function App() {
  return (
    <>
     <header>
      <NavBar />
     </header>
      <div>
        <Hero/>
      </div>
      <div>
        <SiteFooter />
      </div>
    </>
  );
}

export default App;
