//Next, React (core node_modules) imports must be placed here
import { useState } from 'react';
//import STORE from '@/store'
import styled from 'styled-components';
import {Check} from '@styled-icons/boxicons-regular/Check'
import styles from './Projects.module.scss'
import StyledForm from '../StyledForm';
const Projects = (props) => {
	const CheckMark = styled(Check)`
	height: 2rem;
	padding-bottom: 0.5rem;
  	color: #03c4a1;
	`
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
			<h3>Project Name <span><CheckMark /></span></h3>
			<div className={styles.contentContainer}>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum nihil necessitatibus officia debitis veritatis laborum dolores laboriosam voluptatibus omnis, fugiat optio saepe quidem ullam accusantium. Minima error earum quas!</p>
              <textarea
                name="Thread"
                id="Thread"
                placeholder="Thread Content"
				rows="2"
                required
                onChange={handleInputFormData}
              />
			<button>Post
			</button>
			</div>
			</StyledForm>
		</div>
	)
};

export default Projects;
