import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo } from '../../assets/logo8888.svg';
const Header = ({ currentUser }) => (
   <div className="header">
       <Link className="logo-container" to="/">
           <Logo className="logo" />
       </Link>
       <div className="options">
           <Link className="option" to="/shop">
                PIACTÉR
           </Link>
           <Link className="option" to="/shop">
                KAPCSOLAT
           </Link>
           {
             currentUser ?
             <div className="option" onClick={() => auth.signOut()}>Kijelentkezés</div>
             :
             <Link className="option" to='/signin'>Bejelentkezés</Link>
           }
       </div>
   </div>
)

export default Header;