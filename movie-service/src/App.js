import Home from "./routes/Home";
import Detail from "./routes/Detail"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  return (
    <Router >
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail></Detail>}/>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
    </Routes>
    </Router>
  )
}

export default App;
