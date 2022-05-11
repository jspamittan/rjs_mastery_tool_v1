import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const DrawerData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Information',
    path: '/information',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Poll',
    path: '/templates',
    icon: <FaIcons.FaChartBar />,
    cName: 'nav-text'
  },
  {
    title: 'Questions',
    path: '/questions',
    icon: <FaIcons.FaQuestionCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  }
 
];