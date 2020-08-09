import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'; 

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';
import api from '../../services/api';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp, 
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() =>{
            alert('cadastro realizado com sucesso')

            history.push('/')
        })
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        })
        console.log(updatedScheduleItems)
        setScheduleItems(updatedScheduleItems)
    }

    return (
        <div id="page-teacher-form" className="container">
           <PageHeader 
             title="Que incrível que você quer dar aulas!"
             description="o primeiro passo para fazer a diferença"
           />

           <main>
               <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>seus dados</legend>
                    <Input 
                        name="name" 
                        label="name" 
                        value={name} 
                        onChange={(e) => { setName(e.target.value)}}
                    />
                    <Input 
                        name="avatar" 
                        label="avatar" 
                        value={avatar} 
                        onChange={(e) => { setAvatar(e.target.value)}}
                    />
                    <Input 
                        name="whatsapp" 
                        label="whatsapp"
                        value={whatsapp} 
                        onChange={(e) => { setWhatsapp(e.target.value)}}
                    />
                    <Textarea 
                        name="bio" 
                        label="biografia" 
                        value={bio} 
                        onChange={(e) => { setBio(e.target.value)}}
                    />
                </fieldset>

                <fieldset>
                    <legend>sobre a aula</legend>
                    <Select 
                        name="subject" 
                        label="matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value)}}
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
                    <Input 
                        name="cost" 
                        label="custo por hora"
                        value={cost}
                        onChange={(e) => { setCost(e.target.value)}}
                    />
                </fieldset>

                <fieldset>
                    <legend>
                        horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + novo horário
                        </button>
                    </legend>
                    
                    { scheduleItems.map((scheduleItem, index) => {
                        return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                name="week_day" 
                                label="dia da semana"
                                value={scheduleItem.week_day}
                                onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                              name="from"
                              label="das"
                              type="time"
                              value={scheduleItem.from}
                              onChange={e => setScheduleItemValue(index, 'from', e.target.value)} 
                            />
                            <Input 
                              name="to" 
                              label="às" 
                              type="time"
                              value={scheduleItem.to}
                              onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                            />
                            </div>
                        )
                    }) }
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="aviso" />
                        Importante! <br/>
                        Preencha todos os dados.
                    </p>
                    <button type="submit">
                        Salvar cadastro</button>
                </footer>
               </form>
           </main>
        </div>
    )
}

export default TeacherForm;