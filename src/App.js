import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<News key="general" pageSize={6} country="in" category="general"/>} />
            <Route path="/business" element={<News key="business" pageSize={6} country="in" category="business"/>} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment"/>} />
            <Route path="/health" element={<News key="health" pageSize={6} country="in" category="health"/>} />
            <Route path="/science" element={<News key="science" pageSize={6} country="in" category="science"/>} />
            <Route path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports"/>} />
            <Route path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
