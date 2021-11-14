import Image from 'next/image'
import RootLayout from "@/layouts/Root";
import styles from "./Root.module.scss";
import Exhibition from "@/views/Home/Exhibition"
import Carousel from "@/components/Carousel"
import Titles from "@/components/Titles"
import Cover from '@/components/Cover1'

const Davinci = (props) => {
  const SLIDE_COUNT = 10;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <RootLayout>
    <main className={styles.container}>
      <Cover/>
      <div className={styles.containerDescription}>			 
				<div className={styles.text}>
          <h2>I. СУРВАЛЖ БИЧГИЙН ДЭЭЖИС</h2>
          <p>1. Жалзэ тэмбан Ганжуур</p>
          <p>2. Лувсанданзан "Эртний хаадын үндэслэсэн төр ёсны зохиолыг товчлон хураасан алтан товч хэмээх оршвой"</p>
          <p>3. Чингисээс эхлэн Халхын бүх олон ноёдын угсаа залгамжилсан хүрдэн зургийн бичмэл</p>
          <p>4. Асрагч нэртийн түүх</p>
          <p>5. Эрдэнийн товч /Өргөө эх/</p>
          <p>6. Чингисийн дурсгалын түүвэр</p>
          <p>7. Ж. Цэвээн "Монгол улсын түүх"</p>
          <p>8. "Мэргэд гарахын орон" толь бичгийн гар бичмэл</p>
          <p>9. Богдын өргөмжлөл</p>
          <p>10. Оюун түлхүүр</p>
				</div>
				<div className={styles.imgContainer}>
				<div className={styles.img}>     
                <Image
                    alt="cover"
                    src={Titles[0].image}
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