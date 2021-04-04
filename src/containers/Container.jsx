import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import LandingPage from './LandingPage'
import Dashboard from '../components/Dashboard/Dashboard'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivacyPolicy from '../components/PrivacyPolicy/privacyPolicy'
import About from '../components/AboutUs/AboutUs'
import {ProfileProvider} from '../profileContext'


export default function Container() {
    return (
        <div>
            <BrowserRouter>
            <ProfileProvider>
                <Navbar />
                    <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
                    <Route path="/about" component={About} />
                    <Route path="/:404" component={null} />
                    </Switch>
                <Footer />
            </ProfileProvider>
            </BrowserRouter>
        </div>
    )
}
