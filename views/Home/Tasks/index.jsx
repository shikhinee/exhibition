//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import Cover from '@/components/Cover'
import Dropdown from '@/components/Dropdown'
import List from '@/components/List'
import styles from './Tasks.module.scss'

const Tasks = (props) => {
	 return (
		 <div className={styles.container}>
			 <div className={styles.containerCover}>
			 <Cover/>
			 </div>
			<div className={styles.containerDescription}>			 
				<Dropdown/>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis dolor explicabo praesentium quaerat placeat, dicta impedit numquam, eos nobis beatae laudantium sit ab! Voluptatem, amet. Distinctio quod optio natus ipsam?
				Doloribus veritatis ipsum rerum voluptatum debitis facilis cupiditate maiores excepturi tempora numquam? Suscipit, corrupti fugit nihil alias dignissimos nisi eum in soluta maxime, officiis, molestiae recusandae culpa beatae esse officia.
				Qui exercitationem explicabo velit amet mollitia odio placeat, eius fuga quaerat animi corporis atque, voluptas minus! Ad illum at voluptatem atque fugit tenetur error sunt repellat excepturi, praesentium quo odio?
				Ab quia laborum quaerat fuga? Nesciunt, eaque. Harum qui voluptate consequatur illum blanditiis ea minus sint, tempore labore modi atque porro incidunt reprehenderit dicta repellendus accusantium quis mollitia perferendis nisi!
				Similique natus suscipit libero molestiae illum voluptatum, quisquam mollitia, velit debitis voluptatibus rerum earum accusamus cupiditate pariatur voluptas, amet reiciendis quis blanditiis minima? Maiores hic earum libero temporibus nostrum voluptas?
				Aliquam, inventore ut. Laboriosam sunt ipsam suscipit magnam dolore voluptatum tenetur voluptate ipsa temporibus. Incidunt ipsa consectetur expedita delectus id officia fuga, libero maiores laborum omnis obcaecati ipsam, quo cupiditate.
				Voluptate omnis, maiores doloribus voluptatem minima ex repellat distinctio quod in hic. Magnam tempora modi sed recusandae aperiam architecto incidunt veritatis cum voluptate corrupti obcaecati nesciunt consequuntur, facere placeat cupiditate.
				Voluptas aperiam laudantium optio assumenda numquam quisquam porro nemo reiciendis sint impedit illum corporis, ab, cupiditate ullam officiis! Consequuntur possimus perspiciatis iste dolores! Explicabo ut deserunt in doloribus, voluptatum ipsum!
				Facilis excepturi neque labore cum cupiditate voluptate voluptatum debitis molestias nostrum sapiente? Minima saepe est esse ut odit. Fugiat at pariatur laudantium assumenda ut veritatis, voluptatem ea placeat ullam delectus.
				Placeat distinctio ipsam non quisquam ea laudantium culpa illo? Repudiandae incidunt maiores molestiae. Ducimus illo, sint doloribus fuga inventore sed est optio aliquid repellendus reprehenderit vel pariatur? Recusandae, ipsam odit!</p>
				<div><List /></div>
			</div>
			
		 </div>
	)
};

export default Tasks;
