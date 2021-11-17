//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
//import STORE from '@/store'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import List from '@/components/List'
import styles from './Tasks.module.scss'
const Landing = (props) => {
	 return (
		 <div className={styles.container}>
			 <div className={styles.containerCover}>
			 <div className={styles.coverContainer}>
            <div className={styles.coverimg}>     
                <Image
                    alt='cover'
                    src='/Cover.png'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                    priority
                /> 
            </div>
            <div className={styles.shadow}>
            </div>
        </div>			 </div>
			{/* <div className={styles.containerDescription}>			 
				<div className={styles.text}>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis dolor explicabo praesentium quaerat placeat, dicta impedit numquam, eos nobis beatae laudantium sit ab! Voluptatem, amet. Distinctio quod optio natus ipsam?
				Doloribus veritatis ipsum rerum voluptatum debitis facilis cupiditate maiores excepturi tempora numquam? Suscipit, corrupti fugit nihil alias dignissimos nisi eum in soluta maxime, officiis, molestiae recusandae culpa beatae esse officia.
				Qui exercitationem explicabo velit amet mollitia odio placeat, eius fuga quaerat animi corporis atque, voluptas minus! Ad illum at voluptatem atque fugit tenetur error sunt repellat excepturi, praesentium quo odio?
				Ab quia laborum quaerat fuga? Nesciunt, eaque. Harum qui voluptate consequatur illum blanditiis ea minus sint, tempore labore modi atque porro incidunt reprehenderit dicta repellendus accusantium quis mollitia perferendis nisi!
				Similique natus suscipit libero molestiae illum voluptatum, quisquam mollitia, velit debitis voluptatibus rerum earum accusamus cupiditate pariatur voluptas, amet reiciendis quis blanditiis minima? </p>
				</div>
				<div className={styles.img}>     
                <Image
                    alt="cover"
                    src={script}
                    layout= 'fill'
                    objectFit='contain'
                    quality={100}
                /> 
            	</div>
			</div> */}
			<div className={styles.background}><List /></div>
		 </div>
	)
};

export default Landing;
