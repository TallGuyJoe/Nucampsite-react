import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';
import Header from './HeaderComponent';
import Footer from './FootComponent';
import Home from './HeaderComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component {
      constructor(props) {
        super(props);
        this.state = {
          campsites: CAMPSITES,
          comments: COMMENTS,
          partners: PARTNERS,
          promotion: PROMOTIONS
        };
      }


    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={ () => <Directory campsites={this.state.campsites} />} />
                    <Route exact path='/contactus' component={contact}/>
                    <Route exact path='/aboutus' render={ () => <About partners={this.state.partners} />} />
                    <Redirect to='/home' />

                </Switch>
                <Footer />
            </div>


        ); 
    }
}

export default Main; //there can only be one default export per file