
import landing from "./views/landing/landing"
import detail from "./views/detail/detail"
import form from "./views/form/form"
import home from "./views/home/home"
import NavBar from "./components/NavBar/NavBar"
import { Route } from 'react-router-dom';
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      
        <Route exact path="/" component={landing} />
        <Route exact path="/home" component={home} />
        <Route exact path="/detail/:id" component={detail} />     
        <Route exact path="/form" component={form} />
     
    </div>
  );
}

export default App;
