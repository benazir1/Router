
import './App.css'
import {BrowserRouter as Router,Link,Routes, Route} from 'react-router-dom'
import All from './All'
import Career from './Career'
import FullstackDeveloper from './FullstackDeveloper'
import DataScience from './DataScience'
import Cybersecurity from './Cybersecurity'


function App() {
   return (
    <>
     <Router>
     <div className="nav1">
        <nav>
          <ul id="n1">
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/FullstackDeveloper">FullstackDeveloper</Link>
          </li>
          <li>
            <Link to="/DataScience">Datascience</Link>
          </li>
          <li>
            <Link to="/CyberSecurity">Cyber security</Link>
          </li>
          <li>
            <Link to="/Career">Career</Link>
          </li>
          </ul>
        </nav>
      </div>
      <Routes>
      <Route path="/" element={<All/>}></Route>
      <Route path="/FullstackDeveloper" element={<FullstackDeveloper/>}></Route>
      <Route path="/DataScience" element={<DataScience/>}></Route>
      <Route path="/CyberSecurity" element={<Cybersecurity/>}></Route>
      <Route path="/Career" element={<Career/>}></Route>
      </Routes>
      
     </Router>
      
    </>
  )
}

export default App
