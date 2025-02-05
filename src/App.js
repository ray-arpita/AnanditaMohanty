import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Layout from './Layouts/Layout/Layout';
import Main from './Layouts/Main/Main';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element = {<Layout />}>
        <Route index element = {<Main/>} />
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;



