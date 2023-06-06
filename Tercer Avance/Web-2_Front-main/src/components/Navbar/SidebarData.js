
import React from 'react';
//import {Link} from 'react-router-dom';
import * as CgIcon from "react-icons/cg";
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from "react-icons/ri";
import * as TbIcon from "react-icons/tb";
import * as MdIcon from "react-icons/md";



export const SidebarData = [
  
  {
    title: 'Dashboard',
    path: '/Home',
    icon: <RiIcons.RiLayout2Fill />,
    cName: 'nav-text'
  },
  {
    title: 'Actor',
    path: 'Actor',
    icon: <AiIcons.AiFillContacts />,
    cName: 'nav-text'
  },
  {
    title: 'Director',
    path: 'Director',
    icon: <TbIcon.TbChairDirector />,
    cName: 'nav-text'
  },
  {
    title: 'Genero',
    path: 'Genero',
    icon: <MdIcon.MdLocalMovies />,
    cName: 'nav-text'
  },
  {
    title: 'Película',
    path: 'Movie',
    icon: <MdIcon.MdMovieEdit />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: 'Profile',
    icon: <CgIcon.CgProfile />,
    cName: 'nav-text'
  },

  {
    title: 'Reportes',
    path: 'Reportes',
    icon: <TbIcon.TbReport />,
    cName: 'nav-text'
  }

];
