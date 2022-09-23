import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/views/login/Login";
import Header from "./components/views/header/Header";
import Main from "./components/views/mainPage/Main";
import SignUp from "./components/views/login/Signup";
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
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
