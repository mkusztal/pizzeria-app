import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//components
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import TableForm from './components/features/TableForm';
import Home from './components/pages/Home';

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:tableId" element={<TableForm />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
