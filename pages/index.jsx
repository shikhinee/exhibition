import RootLayout from "@/layouts/Root";
import styles from "./Root.module.scss";
import Landing from "@/views/Home/Landing"

const RootPage = (props) => {
  return (
    <RootLayout>
    <main className={styles.container}>
      <Landing/>
    </main>
    </RootLayout>
  );
};

export default RootPage;
