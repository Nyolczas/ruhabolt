import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo } from '../../assets/logo8888.svg';
const Header = () => (
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
       </div>
   </div>
)

export default Header;