import React from 'react';
import { Link } from 'react-router-dom';
import style from './SideMenu.scss';

const SideMenu = () => {
	 return(
		 <div className='side-menu'>
			 <nav className={'side-menu-nav'}>
				 <Link to='/' className='side-menu-nav-item'>
					 Home
				 </Link>
				 <Link to='/store' className='side-menu-nav-item'>
 					Store
 			 	</Link>
				<Link to='/' className='side-menu-nav-item'>
					Email Service
				</Link>
				<Link to='/' className='side-menu-nav-item'>
					Blog Content
				</Link>
			 </nav>
		 </div>
	 )
}
export default SideMenu;
