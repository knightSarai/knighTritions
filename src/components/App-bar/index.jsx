import React, {useRef} from 'react';
import  {Link} from 'react-router-dom';
// Redux
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {cartHiddenSelector} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {SignOutStart} from '../../redux/user/user.action';
// Custom Hooks
import useToggleState from '../../hooks/useToggleState';
import { useOnClickOutside } from '../../hooks/useOnClickOutSide';
// Component
import Burger from './Burger';
import SideBar from './SideBar/';
import Cart from '../cart';
import CartDropdown from '../cart/dropdown';
import Backdrop from './backdrop/backdrop'
import {Appbar, AppbarList, AppBarItems, AppBarItem, Logo} from './AppBar.styles';

function AppBar({currentUser, hidden, SignOutStart}) {
    const [sideBarOpen, toggleSideBar] = useToggleState();
    const node  = useRef();
    useOnClickOutside(sideBarOpen, node, () => toggleSideBar(false));
    let backdrop;
    if (sideBarOpen) {
        backdrop = (
            <Backdrop/>
        );
    }
    return (
        <Appbar className="container">
            <AppbarList>
                <li ref={node}>
                        <Burger sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar}/>
                        <SideBar sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar}/>
                </li>
                <Logo className="logo">
                    <Link to="/"><img src="/img/logo/logo.png" alt=""/></Link>
                </Logo>
                <AppBarItems>
                    <AppBarItem>
                        <Link to="/shop">SHOP</Link>
                    </AppBarItem>
                    {
                        currentUser? 
                        <AppBarItem>
                            <Link to="/" onClick={SignOutStart}>Sign Out</Link>
                        </AppBarItem>
                        : 
                        <AppBarItem>
                            <Link to="/sign">Sign in</Link>
                        </AppBarItem>
                    }
                    
                <AppBarItem>
                    <Link to="/blog">BLOG</Link>
                </AppBarItem>
                </AppBarItems>  
                <Cart/>
                </AppbarList>
                {!hidden && <CartDropdown/>}
                {backdrop}
        </Appbar> 
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: cartHiddenSelector
});

export default connect(mapStateToProps, {SignOutStart})(AppBar)