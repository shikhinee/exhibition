//Next, React (core node_modules) imports must be placed here
import { useState } from 'react';
//import STORE from '@/store'

import styles from './CreateTask.module.scss'
import StyledForm from '../StyledForm';
import Dropdown from '../Dropdown';
const CreateTask = (props) => {
	const [formData, setFormData] = useState({
	  Task: "",
	});
  
	const handleInputFormData = (e) => {
	  setFormData({
		...formData,
		[e.target.name]: e.target.value,
	  });
	};
	 return (
		 <div className={styles.container}>
			<StyledForm>
			<h2>Create A Task</h2>
			<div className={styles.contentContainer}>
			<Dropdown/>
              <textarea
                name="Task"
                id="Task"
                placeholder="Task"
				rows="6"
                required
                onChange={handleInputFormData}
              />
			<button>Create Task
			</button>
			</div>
			</StyledForm>
		</div>
	)
};

export default CreateTask;
