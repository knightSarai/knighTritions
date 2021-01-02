import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
/* REDUX */
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector';
/* UTIL*/
import ScrollToTop from './util/ScrollToTop';
/*COMPONENTS */
import AppBar from './components/App-bar';
import Footer from './pages/_partails/footer';
/* PAGES */
import Homepage from './pages/homepage';
import Shop from './pages/shop';
import Sign from './pages/sign';
import CheckoutCart from './pages/checkoutCart';
/* STYLES */
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './styles/global';
import {theme} from './styles/theme';
import './App.css';

class App extends React.Component{
  render () {
    const {currentUser} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <AppBar/>
        <ScrollToTop/>
        <Switch>
          <Route  path="/" exact component={Homepage}/>
          <Route  path="/shop"  component={Shop}/>
          <Route path="/checkout" exact component={CheckoutCart}/>
          <Route  path="/sign" exact render={() => currentUser? <Redirect to="/"/> : <Sign/>}/>
          <Route render={() => <h1>Not found!</h1>} />
        </Switch>
        <Footer/>
      </ThemeProvider>
    );
  }
 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
