import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//components
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import EditTable from './components/features/EditTable';
import Home from './components/pages/Home';
import TablesPage from './components/pages/TablesPage';
import NotFound from './components/pages/NotFound';

// redux
import { fetchTables } from './redux/tablesRedux';
import { fetchStatus } from './redux/tablesStatusRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import TableForm from './components/features/TableForm';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);
  useEffect(() => dispatch(fetchStatus()), [dispatch]);

  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tables" element={<TablesPage />} />
          <Route path="/tables/api/tables" element={<TableForm />} />
          <Route path="/tables/:tableId" element={<EditTable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
