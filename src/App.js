import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MoviesList from './MoviesList'
import AddMovie from './AddMovie'
import { FetchPosts } from './FetchPosts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <div className="App">
      <h1>Welcome to the Posts Page</h1>
        <FetchPosts />
      <Routes>
          <Route path='list' element={<MoviesList/>}/>
          <Route path='add' element={<AddMovie/>} />
    </Routes> 
    </div>
    </BrowserRouter> 
    </QueryClientProvider>
  );
}

export default App;
