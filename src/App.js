import logo from './creyygmatape.JPG';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeController from './components/HomeController';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          components= {(props) => (
            <div>
              <HomeController/>
            </div>
          )}
        />
         <Route component={NotFoundPage} />
      </Routes>
    </Router>
  );
}

export default App;
