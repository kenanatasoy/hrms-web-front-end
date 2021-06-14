import React from "react";
import Home from "../pages/Home.jsx";
import JobAdvertList from "../pages/JobAdvertList.jsx";
import JobAdvertDetail from "../pages/JobAdvertDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Navi from "./Navi.jsx";
import { Route, Switch } from "react-router";
import EmployerList from "../pages/EmployerList.jsx";
import JobSeekerCVList from "../pages/JobSeekerCVList.jsx";
import JobSeekerList from "../pages/JobSeekerList.jsx";
import Footer from "./Footer.jsx";

export default function Dashboard() {
  return (
    <div>
      <Navi />
      <div style ={{paddingTop: "6.25em"}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/jobadverts" component={JobAdvertList} />
          <Route exact path="/jobadverts/:id" component={JobAdvertDetail} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/employers" component={EmployerList} />
          <Route exact path="/jobseekers" component={JobSeekerList} />
          <Route exact path="/jobseekercvs" component={JobSeekerCVList} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
