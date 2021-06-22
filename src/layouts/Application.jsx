import React from "react";
import Navi from "./Navi.jsx";
import Footer from "./Footer.jsx";
import Home from "../pages/Home.jsx";
import JobAdvertList from "../pages/JobAdvertList.jsx";
import JobAdvertDetail from "../pages/JobAdvertDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Route, Switch } from "react-router";
import EmployerList from "../pages/EmployerList.jsx";
import JobSeekerCVList from "../pages/JobSeekerCVList.jsx";
import JobSeekerList from "../pages/JobSeekerList.jsx";
import JobSeekerCVForm from "../pages/JobSeekerCVsForm.jsx";
import JobTitleForm from "../pages/JobTitleForm.jsx"
import JobAdvertForm from "../pages/JobAdvertForm.jsx";

export default function Dashboard() {
  return (
    <div style={{marginTop: "100px"}}>
      <Navi />
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
          <Route exact path="/jobseekerCVform" component={JobSeekerCVForm} />
          <Route exact path="/jobtitleform" component={JobTitleForm} />
          <Route exact path="/jobadvertform" component={JobAdvertForm}></Route>
        </Switch>
      <Footer />
    </div>
  );
}
