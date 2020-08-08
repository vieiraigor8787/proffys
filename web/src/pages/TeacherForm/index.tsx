import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
           <PageHeader 
             title="Que incrível que você quer dar aulas!"
             description="o primeiro passo para fazer a diferença"
           />

           <main>
               <fieldset>
                   <legend>seus dados</legend>
                   <Input name="name" label="name"/>
                   <Input name="avatar" label="avatar"/>
                   <Input name="whatsapp" label="whatsapp"/>
                   <Textarea name="bio" label="biografia"/>
               </fieldset>

               <fieldset>
                   <legend>sobre a aula</legend>
                   
                   <Input name="cost" label="custo por hora"/>
               </fieldset>

               <fieldset>
                   <legend>
                       horários disponíveis
                    <button type="button">
                         + novo horário
                    </button>
                   </legend>
                   
                   <div className="schedule-item">
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
                   </div>

                   <Input name="from" label="das" type="time" />
                   <Input name="to" label="às" type="time" />
               </fieldset>

               <footer>
                   <p>
                       <img src={warningIcon} alt="aviso" />
                       Importante! <br/>
                       Preencha todos os dados.
                   </p>
                   <button type="button">Salvar cadastro</button>
               </footer>
           </main>
        </div>
    )
}

export default TeacherForm;