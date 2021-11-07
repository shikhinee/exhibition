//Next, React (core node_modules) imports must be placed here
//import STORE from '@/store'
import styled from 'styled-components';
import {Arrow90degDown} from '@styled-icons/bootstrap/Arrow90degDown';
import styles from './Thread.module.scss';

const Thread = (props) => {
	const Comment = styled(Arrow90degDown)`
	height: 5rem;
	padding: 0.56rem;
  	color: #383E46;
	transform: rotate(-90deg);
	`
	 return (
		 <div className={styles.container}>
			 <div className={styles.arrow}>
				 <Comment />
			 </div>
			 <div className={styles.content}>
				<div className={styles.header}>
					<h4>Thread <span>#N</span></h4>
					<h4>2021/10/04 15:30PM</h4>
				</div>
				<p>width: 100% to width: 90% TO FIX OVERFLOW</p>
			 </div>
		</div>
	)
};

export default Thread;
