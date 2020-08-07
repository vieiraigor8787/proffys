import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
	return (
		<article className='teacher-item'>
			<header>
				<img
					src='https://api.adorable.io/avatars/285/abott@adorable.png'
					alt='avatar'
				/>
				<div>
					<strong>Mario Silva</strong>
					<span>Química</span>
				</div>
			</header>
			<p>
				Quis officia voluptate proident occaecat Lorem id enim nulla aliquip
				veniam nostrud elit eiusmod. Nostrud anim cupidatat nulla eiusmod magna
				consectetur officia cupidatat et laboris sint velit. Irure qui culpa
				dolore nostrud mollit deserunt Lorem sunt irure est elit.
			</p>
			<footer>
				<p>
					Preço/hora:
					<strong>R$ 80,00</strong>
				</p>
				<button type='button'>
					<img src={whatsappIcon} alt='whatsapp' />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
};

export default TeacherItem;