import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Information',
    path: '/',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Poll',
    path: '/',
    icon: <FaIcons.FaChartBar />,
    cName: 'nav-text'
  },
  {
    title: 'Questions',
    path: '/',
    icon: <FaIcons.FaQuestionCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  }
 
];