import React, {useState} from 'react';
import './AddProduct.scss';
import Input from '../Input/Input';
import Button1 from '../Button1/Button1';
import UploadImages from '../UploadImages/UploadImages';

const AddProduct = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [inventory, setInventory] = useState(0);
	const [price, setPrice] = useState(0);
	const [discount, setDiscount] = useState(0);

	 return(
		 <div className='add-product'>
		 	<div className='add-product-header'>Add new product</div>
			<div className='add-product-body'>
			<div className='add-product-info'>
				<form>
					 <Input
						 name={'name'}
						 type={'text'}
						 text={'Product Name'}
						 value={name}
						 setValue={setName}
						 size={'medium'}
					 />
					 <Input
						 name={'description'}
						 type={'text'}
						 text={'Description'}
						 value={description}
						 setValue={setDescription}
					 />
					 <Input
						 name={'category'}
						 type={'text'}
						 text={'Category'}
						 value={category}
						 setValue={setCategory}
					 />
					 <Input
						 name={'inventory'}
						 type={'number'}
						 text={'Inventory'}
						 value={inventory}
						 setValue={setInventory}

					 />
					 <Input
						 name={'price'}
						 type={'number'}
						 text={'Price'}
						 value={price}
						 setValue={setPrice}

					 />
					 <Input
						 name={'discount'}
						 type={'number'}
						 text={'Discount'}
						 value={discount}
						 setValue={setDiscount}
						 step={5}

					 />
					 <Button1
						 text={'Add Product'}

					/>
				</form>
		 </div>
		 <UploadImages />


			</div>

		 </div>
	 )
}
export default AddProduct;
