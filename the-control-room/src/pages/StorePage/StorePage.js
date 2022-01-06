import React, { useEffect } from 'react';
import './StorePage.scss';

import ProductList from '../../components/ProductList/ProductList';
import AddProduct from '../../components/AddProduct/AddProduct';
const StorePage = () => {



	 return(
		 <div className='store-page page'>
		 		<h1 className='page-header'>Store</h1>
				<AddProduct />
				<ProductList />
		 </div>
	 )
}
export default StorePage;
