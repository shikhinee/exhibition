import Image from 'next/image'
import RootLayout from '@/layouts/Root';
import styles from './Root.module.scss';
import Cover4 from '@/components/Cover4'
import Carousel from '@/components/Carousel'
import Titles from '@/components/Titles'
const Davinci = (props) => {
  const SLIDE_COUNT = 6;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <RootLayout>
    <main className={styles.container}>
      <Cover4/>
      <div className={styles.containerDescription}>			 
				<div className={styles.text}>
					<h2>IV. МОНГОЛЧУУДЫН БИЧИГ ҮСГИЙН ДУРСГАЛ</h2>
          <p>1. Соёмбо үсгийн цагаан толгой</p>
          <p>2. Суут Богд Чингис хааны тууж оршвой /тод үсгээр/</p>
          <p>3. Буянт хан хөвгүүний намтар /вагиндра үсгээр/</p>
          <p>4. Хэвтээ дөрвөлжин үсэг</p>
          <p>5. Галиг үсэг оршвой /али гали үсгээр/ </p>
          <p>6. Дөрвөлжин үсгийн дурсга</p>
				</div>
				<div className={styles.imgContainer}>
				<div className={styles.img}>     
                <Image
                    alt='cover'
                    src={Titles[3].image}
                    layout= 'fill'
                    objectFit='contain'
                /> 
            	</div>
				</div>
			</div>
      <Carousel slides={slides}/>
    </main>
    </RootLayout>
  );
};

export default Davinci;