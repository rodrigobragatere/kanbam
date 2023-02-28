import 'bootstrap/dist/css/bootstrap.min.css';

import Kanban from './Components/Kanban'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Container } from 'react-bootstrap';
import AuthProvider from './Contexts/AuthContext'

function App() {
  return (
        <AuthProvider>
          <Header />
          <Container>
            <Kanban />           
          </Container>
          <Footer />
        </AuthProvider>
  );
}

export default App;

