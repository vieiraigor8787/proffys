import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

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
                   <legend>Seus dados</legend>
                   <Input name="name" label="name"/>
                   <Input name="avatar" label="avatar"/>
                   <Input name="whatsapp" label="whatsapp"/>
               </fieldset>

               <fieldset>
                   <legend>Sobre a aula</legend>
                   <Input name="subject" label="subject"/>
                   <Input name="cost" label="avatar"/>
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