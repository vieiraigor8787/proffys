import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

const TeacherList: React.FC = () => {
	return (
		<div id='page-teacher-list' className='container'>
			<PageHeader title='Estes são os proffys disponíveis'>
				<form id='search-teachers'>
					<Select 
					  name="subject" 
					  label="matéria"
					  options={[
						{ value: 'artes', label: 'artes'},
						{ value: 'biologia', label: 'biologia'},
						{ value: 'matemática', label: 'matemática'},
						{ value: 'história', label: 'história'},
						{ value: 'gepgrafia', label: 'gepgrafia'},
						{ value: 'português', label: 'português'},
						{ value: 'química', label: 'química'},
						{ value: 'física', label: 'física'},
						{ value: 'geometria', label: 'geometria'},
						{ value: 'aritmética', label: 'aritmética'},
						{ value: 'educação financeira', label: 'educação financeira'},
						{ value: 'ed. artística', label: 'ed. artística'},
						{ value: 'ed. física', label: 'ed. física'}
					  ]}
					/>
					<Select 
					  name="week_day" 
					  label="dia da semana"
					  options={[
						{ value: '1', label: 'domingo'},
						{ value: '2', label: 'sábado'},
						{ value: '3', label: 'terça'},
						{ value: '4', label: 'quarta'},
						{ value: '5', label: 'quinta'},
						{ value: '6', label: 'sexta'},
						{ value: '7', label: 'sábado'},
					  ]}
					/>
					<Input name="time" label="horário" type="time"/>
				</form>
			</PageHeader>

			<main>
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
			</main>
		</div>
	);
};

export default TeacherList;