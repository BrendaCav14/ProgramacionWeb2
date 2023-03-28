import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AddCast } from "../components/AddCast";
import { AddGenre } from "../components/AddGenre";
import { AddMovie } from "../components/AddMovie";
import { Movie } from "../components/Movie";
import { Header } from "../components/Header";
import { Dashboard } from "../components/Dashboard";
import { Login } from "../components/Login";
import { Registrarse } from "../components/Registrarse";
import { EditProfile } from "../components/EditProfile";


export const AppRouter = () => {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Registrarse" component={Registrarse} />
            <Route path="/Dashboard" component={Dashboard}/>
            <Route path="/Movie" component={Movie} />
            <Route path="/AddMovie" component={AddMovie} />
            <Route path="/AddGenre" component={AddGenre} />
            <Route path="/AddCast" component={AddCast} />
            <Route path="/EditProfile" component={EditProfile} />

          </Switch>
        </div>
      </Router>
    );
  };
