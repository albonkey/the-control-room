import React, {useState, useEffect} from 'react';
import './UploadImages.scss';

const UploadImages = () => {

	const [image, setImage] = useState([]);
	const [imageURL, setImageURL] = useState([]);

	useEffect(() => {
		if(image.length < 1) return;

		const newImageUrl = [];
		image.forEach(image => newImageUrl.push(URL.createObjectURL(image)));
		setImageURL(newImageUrl);
	}, [image])

	function onImageChange(e) {
		setImage([...e.target.files])
	}
	 return(
		 <div className='upload-images'>
		 		{
					image.length < 1 ? <label className='upload-images-label' htmlFor='image-upload'>Click to upload image</label> :
					<label className='upload-images-label' htmlFor='image-upload'>
						{imageURL.map(imageSrc => <img src={imageSrc } width='200px'/>)}
					</label>



				}

		 		<input className='upload-images-input' id='image-upload' type='file' accept='image/*' onChange={onImageChange} />

		 </div>
	 )
}
export default UploadImages;
