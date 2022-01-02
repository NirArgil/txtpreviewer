import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { ReadFile } from './components/ReadFile';
import { Output } from './components/Output';
import { Home } from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read-file" element={<ReadFile />} />
          <Route path="/output" element={<Output />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;