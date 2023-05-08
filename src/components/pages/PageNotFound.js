// Libraries
import { Fragment } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Files
import Header from '../Header';
import Footer from '../Footer';

const PageNotFound = () => {
  return (
    <Fragment>
      <Container>
        <Header />
        <div className="not-found">
          <h1>Sorry, page could not be found!</h1>
        </div>
        <Footer />
      </Container>
    </Fragment>
  );
};

export default PageNotFound;