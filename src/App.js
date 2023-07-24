import './App.css';
import Header from './homepage/components/header/Header'
import Home from './homepage/components/home/Home'
import Service from './homepage/components/service/Service';
import Footer from './homepage/components/footer/Footer';
import Contact from './homepage/components/contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Service />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
