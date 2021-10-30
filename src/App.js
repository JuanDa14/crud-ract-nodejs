import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Editar from "./views/Editar";

const Index = lazy(() => import("./views/Index"));
const Lista = lazy(() => import("./views/Lista"));
const Crear = lazy(() => import("./views/Crear"));

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Suspense fallback={<div>Cargando :v</div>}>
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/crear" component={Crear}></Route>
          <Route
            exact
            path="/editar/:id"
            render={({ match }) => {
              return <Editar id={match.params.id}></Editar>;
            }}
          ></Route>
          <Route exact path="/lista" component={Lista}></Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
