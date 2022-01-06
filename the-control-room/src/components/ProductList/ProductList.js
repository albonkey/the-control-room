import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import { API } from 'aws-amplify';

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const myFunction = async() => {
		const data = await API.get('ecommerce', '/products')

		setProducts(data.products)
	}
	useEffect(() => {
		console.log(myFunction())
	}, [])

	 return(
		 <div className='product-list'>
		 		<h2 className='product-list-header'>Products</h2>
				<table className='product-list-table'>
					<thead>
						<tr>
							<th>Product ID</th>
							<th>Name</th>
							<th>Inventory</th>
							<th>Category</th>
							<th>Price</th>
							<th>Discount</th>
						</tr>
					</thead>
					<tbody>
					{
						products &&
							products.map((product) => {
								return <tr key={product._id}>
												<td>{product._id}</td>
												<td>{product.name}</td>
												<td>{product.countInStock['small']}</td>
												<td>{product.category}</td>
												<td>{product.price}</td>
												<td>{0}</td>
											</tr>
							})
					}
					</tbody>
				</table>
		 </div>
	 )
}
export default ProductList;
