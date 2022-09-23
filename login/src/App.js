import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/views/loginPage/Login";
import Header from "./components/views/header/Header";
import React from "react";

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Header />
//       <Router>
//         <Route path="/login" element={<Login />} />
//       </Router>
//     </BrowserRouter>
//   </React.StrictMode>
// );
function App() {
  return (
    <Router>
      <Switch>
        <Header />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
