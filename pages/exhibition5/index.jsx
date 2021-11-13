import RootLayout from "@/layouts/Root";
import styles from "./exhibition5.module.scss";
import Exhibition from "@/views/Home/Landing"

const RootPage = (props) => {
  return (
    <RootLayout>
    <main className={styles.container}>
      <Exhibition/>
    </main>
    </RootLayout>
  );
};

export default RootPage;