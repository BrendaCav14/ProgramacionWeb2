
import React from 'react';
//import {Link} from 'react-router-dom';
import * as CgIcon from "react-icons/cg";
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from "react-icons/ri";



export const SidebarCliente = [
 
  {
    title: 'Dashboard',
    path: '/Welcome',
    icon: <RiIcons.RiLayout2Fill />,
    cName: 'nav-text'
  },

  {
    title: 'Profile',
    path: 'Profile',
    icon: <CgIcon.CgProfile />,
    cName: 'nav-text'
  },

  {
    title: 'Carrito',
    path: 'Carrito',
    icon: <AiIcons.AiOutlineShoppingCart />,
    cName: 'nav-text'
  },

  {
    title: 'MisCompras',
    path: 'MisCompras',
    icon: <AiIcons.AiOutlineShopping />,
    cName: 'nav-text'
  }

];
