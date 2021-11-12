import RootLayout from "@/layouts/Root";
import styles from "./Root.module.scss";
import Tasks from "@/views/Home/Tasks"
import Carousel from "@/components/Carousel"
const Davinci = (props) => {
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <RootLayout>
    <main className={styles.container}>
      <Tasks/>
      <Carousel slides={slides}/>
    </main>
    </RootLayout>
  );
};

export default Davinci;