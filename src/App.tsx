import React from 'react';
import PostsList from './components/PostsList/PostsList';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { About } from './components/About/About';
import { Layout } from './components/Layout/Layout';
import { Container } from './components/UI/Container/Container';
import { Page } from './components/Pages/Page';

function App() {
  return (
    <Container className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<About/>}/>
            <Route path="posts" element={<PostsList />} />
            <Route path="posts/:id" element={<Page />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
