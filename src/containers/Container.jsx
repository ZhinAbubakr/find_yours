import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LandingPage from "./LandingPage";
import Dashboard from "../components/Dashboard/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivacyPolicy from "../components/PrivacyPolicy/privacyPolicy";
import About from "../components/AboutUs/AboutUs";
import Form from "../components/Form/Form";
import ContactUs from "./CountactUs";
import { ProfileProvider } from "../profileContext";
import Profile from "../components/Profile/Profile";
import {
  HOME_ROUTE,
  DASHBOARD_ROUTE,
  NOT_FOUND_ROUTE,
  PRIVACYPOLICY_ROUTE,
  ABOUT_ROUTE,
  FORM_ROUTE,
  CONTACTUS_ROUTE,
  POST_ROUTE,
} from "./routes";
import ViewPost from "../components/ViewPost/ViewPost";

export default function Container() {
  return (
    <div>
      <BrowserRouter>
        <ProfileProvider>
          <Navbar />
          <Switch>
            <Route exact path={POST_ROUTE} component={ViewPost} />
            <Route path={"/profile"} component={Profile} />
            <Route exact path={HOME_ROUTE} component={LandingPage} />
            <Route path={DASHBOARD_ROUTE} component={Dashboard} />
            <Route path={PRIVACYPOLICY_ROUTE} component={PrivacyPolicy} />
            <Route path={ABOUT_ROUTE} component={About} />
            <Route path={CONTACTUS_ROUTE} component={ContactUs} />
            <Route path={FORM_ROUTE} component={Form} />
            <Route path={NOT_FOUND_ROUTE} component={null} />
          </Switch>
          <Footer />
        </ProfileProvider>
      </BrowserRouter>
    </div>
  );
}
