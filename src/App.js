import './App.css';
import Navigationbar from './Navbar'
import HomePage from './HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddBlog from './AddBlog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <div className="content">
          <Routes>
            <Route  path='/' element={<HomePage/>} />
            <Route  path='/create' element={<AddBlog/>} />
            <Route  path='/blogs/:id' element={<BlogDetails/>} />
            <Route  path='*' element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
