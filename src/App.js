import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
