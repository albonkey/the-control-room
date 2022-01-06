import React from 'react';
import './Button1.scss';

const Button1 = ({text, action, style}) => {
	 return(
		 <div className={'button1 ' + 'button1-' + style} onClick={() => action()}>
		 	{text}
		 </div>
	 )
}
export default Button1;
