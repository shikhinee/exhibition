//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

import styles from './Update.module.scss'

const Update = (props) => {
	 return (
		 <div className={styles.container}>
			<h2>Updates</h2>
			<div className={styles.updateContainer}>
				<div className={styles.project}>
					<div className={styles.projectName}>
						<span className={styles.name}>ProjectName</span>
						<span className={styles.arrow}></span>
						<span className={styles.version}>0.0.1</span>
					</div>
					<div className={styles.description}>
						<span>BUG: fixed navbar overflow</span>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectName}>
						<span className={styles.name}>ProjectName</span>
						<span className={styles.arrow}></span>
						<span className={styles.version}>0.0.1</span>
					</div>
					<div className={styles.description}>
						<span>BUG: fixed navbar overflow</span>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectName}>
						<span className={styles.name}>ProjectName</span>
						<span className={styles.arrow}></span>
						<span className={styles.version}>0.0.1</span>
					</div>
					<div className={styles.description}>
						<span>BUG: fixed navbar overflow</span>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectName}>
						<span className={styles.name}>ProjectName</span>
						<span className={styles.arrow}></span>
						<span className={styles.version}>0.0.1</span>
					</div>
					<div className={styles.description}>
						<span>BUG: fixed navbar overflow</span>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Update;
