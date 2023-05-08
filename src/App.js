
// Libraries
import { Fragment } from 'react';
import { Routes, Route, } from 'react-router-dom';

// Pages
import Home from './components/pages/Home';
import PageNotFound from './components/pages/PageNotFound';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/PageNotFound" element={<PageNotFound/>} /> 
        <Route path="*" element={<PageNotFound/>} /> 
      </Routes>
    </Fragment>
  );
}

export default App;
