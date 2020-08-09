import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';

const TeacherList: React.FC = () => {
	const [teachers, setTeachers] = useState([]);

	const [subject, setSubject] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time, setTime] = useState('');

	async function searchTeachers(e: FormEvent) {
		e.preventDefault();

		const res = await api.get('classes', {
			params: {
				subject,
				week_day,
				time
			}
		});
		console.log(res.data)
		setTeachers(res.data)
		console.log({subject,week_day,time})
	}

	return (
		<div id='page-teacher-list' className='container'>
			<PageHeader title='Estes são os proffys disponíveis'>
				<form id='search-teachers' onSubmit={searchTeachers}>
					<Select 
					  name="subject" 
					  label="matéria"
					  value={subject}
					  onChange={(e) => { setSubject(e.target.value) }}
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
					  value={week_day}
					  onChange={(e) => { setWeekDay(e.target.value) }}
					  options={[
						{ value: '1', label: 'domingo'},
						{ value: '2', label: 'segunda'},
						{ value: '3', label: 'terça'},
						{ value: '4', label: 'quarta'},
						{ value: '5', label: 'quinta'},
						{ value: '6', label: 'sexta'},
						{ value: '7', label: 'sábado'},
					  ]}
					/>
					<Input 
					  name="time"
					  label="horário"
					  type="time"
					  value={time}
					  onChange={(e) => { setTime(e.target.value) }}
					/>

					<button type="submit">
						Buscar
					</button>
				</form>
			</PageHeader>

			<main>
				{teachers.map((teacher: Teacher) => {
					return <TeacherItem key={teacher.id} teacher={teacher} />
				})}
			</main>
		</div>
	);
};

export default TeacherList;