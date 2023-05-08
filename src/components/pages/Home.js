// Libraries
import { Fragment } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Files
import Header from '../Header';
import About from '../About';
import Projects from '../Projects';
import Footer from '../Footer';

const Home = () => {
  return (
    <Fragment>
      <Container>
        <Header />
        <About />
        <Projects />
        <Footer />
      </Container>
    </Fragment>
  );
};

export default Home;