import Image from 'next/image'
import RootLayout from "@/layouts/Root";
import styles from "./Root.module.scss";
import Carousel from "@/components/Carousel"
import Titles from "@/components/Titles"
import Cover from "@/components/Cover2"
const Davinci = (props) => {
  const SLIDE_COUNT = 9;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <RootLayout>
    <main className={styles.container}>
      <Cover/>
      <div className={styles.containerDescription}>			 
				<div className={styles.text}>
          <h2>II.  ЭРДЭНЭСЭЭР УРЛАСАН БҮТЭЭЛИЙН ДЭЭЖИС</h2>
          <p>1. Есөн эрдэнийн Ганжуур</p>
          <p>2. Есөн эрдэнийн Жадамба</p>
          <p>3. Алтан Жадамба </p>
          <p>4. Алтан Жадамба /зүмбэртэй/</p>
          <p>5. Мөнгөн Сандуйн жүд</p>
          <p>6. Жадамба /найман тахилтай/</p>
          <p>7. Хутагт билгийн чанад хязгаараа (хязгаарт) хүрсэн найман мянгат оршвой /Жадамба/</p>
          <p>8. Ц. Бавуудорж "Монголын их амар амгалан"</p>
          <p>9. Хутагт очироор огтлогч билгийн чанад хязгаараа (хязгаарт) хүрсэн их хөлгөн судар оршвой</p>
				</div>
				<div className={styles.imgContainer}>
				<div className={styles.img}>     
                <Image
                    alt="cover"
                    src={Titles[1].image}
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