import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import MenuDropdown from "./components/menu-dropdown/menu-dropdown.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    window.addEventListener("scroll", this.handleScroll);
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    this.unsubscribeFromAuth();
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    console.log(this.props.menuHidden)
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 300 || this.props.menuHidden === false || this.props.hidden === false) {
      this.setState({
        visible: true
      });
    } else {
      const visible = prevScrollpos > currentScrollPos;

      this.setState({
        prevScrollpos: currentScrollPos,
        visible
      });
    }
  };

  render() {
    return (
      <div>
      <div className="body-of-the-page">
        <Header isVisible={this.state.visible} />
        {this.props.menuHidden ? null :  (<MenuDropdown className="menu"/>) }
        <div className="header-mask"></div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
      <Footer/>
      </div>
    );
  }
}

const mapStateToProps = ({ user, menu, cart }) => ({
  currentUser: user.currentUser,
  menuHidden: menu.menuHidden,
  hidden: cart.hidden
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
