import Image from 'next/image'
import RootLayout from '@/layouts/Root';
import styles from './exhibition5.module.scss';
import Cover5 from '@/components/Cover5'
import Carousel from '@/components/Carousel'
import Titles from '@/components/Titles'
const Davinci = (props) => {
  const SLIDE_COUNT = 9;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <RootLayout>
    <main className={styles.container}>
      <Cover5/>
      <div className={styles.containerDescription}>			 
				<div className={styles.text}>
          <h2>УЛАМЖЛАЛТ БИЧГИЙН ХЭРЭГЛЭГДЭХҮҮН</h2>
          <p>1. Модон шогол</p>
          <p>2. Эсгий шогол</p>
          <p>3. Тугалын арьсан баринтаг</p>
          <p>4. Үнсэн самбар, хулсан үзэг</p>
          <p>5. Олсон боолт</p>
          <p>6. Судрын хавтас /бурхантай/</p>
          <p>7. Хулс, зэгсэн хавтас</p>
          <p>8. Судрын хавтас /зүү ороож оёсон/</p>
          <p>9. Судрын хавтас /оёмол/</p>				
          </div>
				<div className={styles.imgContainer}>
				<div className={styles.img}>     
                <Image
                    alt='cover'
                    src={Titles[4].image}
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