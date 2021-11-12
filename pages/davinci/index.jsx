import RootLayout from "@/layouts/Root";
import styles from "./Root.module.scss";
import Tasks from "@/views/Home/Tasks"
import Carousel from "@/components/Carousel"
const RootPage = (props) => {
  return (
    <RootLayout>
    <main className={styles.container}>
      <Tasks/>
      <Carousel />
    </main>
    </RootLayout>
  );
};

export default RootPage;