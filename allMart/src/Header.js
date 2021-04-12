import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {useStateValue} from './StateProvider';
import {auth} from "./firebase";
// import {myImage} from 'src/AllMart.png'

function Header() {
    const [{basket,user},dispatch] = useStateValue();
    
    const handleAuth = () =>{
        if (user){
            auth.signOut();
        }
    }
    console.log(basket);
  
    return (
        <nav className="header">
            <Link to='/' >
            <img className="header__logo" src="https://i.ibb.co/qkcYSfP/AllMart.png"/>
            </Link>

        <div className="header__search">
            <input type="text" placeholder="Search for products, brands and more..." className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
        </div>

        <div className="header__nav">
        {/* If no user is is logged in , go to login page */}
            <Link to={!user && "/login"} className="header__link">
                <div onClick={handleAuth} className="header__option">
                    <span className="header__optionLineOne a">Hello {!user ? 'Guest' : user.email}</span>
                    <span id="sign" className="header__optionLineTwo">{user? 'SignOut' : 'SignIn'}</span>
                </div>
            </Link>
        </div>

            {/* <Link className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns </span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link> */}

            {/* <Link className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your Prime</span>
                    <span className="header__optionLineTwo">Signin</span>
                </div>
            </Link>
             */}

            <Link to="/checkout">
                <div className="header__optionBasket">
                    <LocalMallIcon/>
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>


        </nav>
    )
}

export default Header
