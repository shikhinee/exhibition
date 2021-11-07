import RootLayout from "@/layouts/Root";
import styles from "./Root.module.scss";
import Tasks from "@/views/Home/Tasks"

const RootPage = (props) => {
  return (
    <RootLayout>
    <main className={styles.container}>
      <Tasks/>
    </main>
    </RootLayout>
  );
};

export default RootPage;