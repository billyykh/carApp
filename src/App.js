import './App.css';
import Header from './homepage/components/header/Header'
import Home from './homepage/components/home/Home'
import Service from './homepage/components/service/Service';
import Footer from './homepage/components/footer/Footer';
import Contact from './homepage/components/contact/Contact';
import Line from './homepage/components/line/Line'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Line />
        <Service />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
