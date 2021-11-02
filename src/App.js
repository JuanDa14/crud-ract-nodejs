import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Editar from "./views/Editar";
import Index from "./views/Index";
import Crear from "./views/Crear";
import Lista from "./views/Lista";
import Cargando from "./views/Cargando";
function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={Cargando}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/crear" component={Crear} />
          <Route
            exact
            path="/editar/:id"
            render={({ match }) => {
              return <Editar id={match.params.id}></Editar>;
            }}
          />
          <Route exact path="/lista" component={Lista} />
        </Switch>
      </Suspense>
    </Router>
  );
}
export default App;
