//Next, React (core node_modules) imports must be placed here
import Link from "next/link"
//import STORE from '@/store'
import { useState } from 'react';
import styles from "./Menu.module.scss";
import ThemeToggler from '@/components/ThemeToggler';

const Menu = (props) => {
  const [themeChanged, setThemeChanged] = useState(false);
  const handleTheme = () => {
    setThemeChanged(!themeChanged)
  }
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <h2>БИДНИЙ ТУХАЙ</h2>
        <Link href="https://nationallibrary.mn/%d0%b7%d0%b0%d1%85%d0%b8%d1%80%d0%b0%d0%bb%d1%8b%d0%bd-%d0%bc%d1%8d%d0%bd%d0%b4%d1%87%d0%b8%d0%bb%d0%b3%d1%8d%d1%8d/"><p>Захиралын мэндчилгээ</p></Link>
        <Link href="https://nationallibrary.mn/%d0%b1%d2%af%d1%82%d1%8d%d1%86-%d0%b7%d0%be%d1%85%d0%b8%d0%be%d0%bd-%d0%b1%d0%b0%d0%b9%d0%b3%d1%83%d1%83%d0%bb%d0%b0%d0%bb%d1%82/"><p>Бүтэц, зохион байгуулалт</p></Link>
        <Link href="https://nationallibrary.mn/%d1%82%d2%af%d2%af%d1%85-%d1%82%d2%af%d2%af%d1%85%d1%8d%d0%bd-%d1%85%d3%a9%d0%b3%d0%b6%d0%b8%d0%bb/"><p>Түүх, түүхэн хөгжил</p></Link>
        <Link href="https://nationallibrary.mn/%d1%81%d1%82%d1%80%d0%b0%d1%82%d0%b5%d0%b3%d0%b8-%d1%82%d3%a9%d0%bb%d3%a9%d0%b2%d0%bb%d3%a9%d0%b3%d3%a9%d3%a9/"><p>Стратеги төлөвлөгөө</p></Link>
        <Link href="https://nationallibrary.mn/%d0%be%d0%bd-%d1%86%d0%b0%d0%b3%d0%b8%d0%b9%d0%bd-%d1%85%d1%8d%d0%bb%d1%85%d1%8d%d1%8d/"><p>Он цагийн хэлхээ</p></Link>
        <h2>ҮЙЛЧИЛГЭЭ</h2>
        <Link href="https://nationallibrary.mn/%d1%83%d0%bd%d1%88%d0%b8%d0%b3%d1%87-%d0%b1%d2%af%d1%80%d1%82%d0%b3%d1%8d%d0%bb/"><p>Уншигч бүртгэл</p></Link>
        <Link href="https://nationallibrary.mn/%d1%82%d0%b0%d0%bd%d1%85%d0%b8%d0%bc%d1%83%d1%83%d0%b4%d1%8b%d0%bd-%d1%86%d0%b0%d0%b3%d0%b8%d0%b9%d0%bd-%d1%85%d1%83%d0%b2%d0%b0%d0%b0%d1%80%d1%8c/"><p>Танхимуудын цагийн хуваарь</p></Link>
        <Link href="https://nationallibrary.mn/%d0%bd%d0%be%d0%bc%d1%8b%d0%bd-%d1%81%d0%b0%d0%bd-%d1%85%d0%be%d0%be%d1%80%d0%be%d0%bd%d0%b4%d1%8b%d0%bd-%d1%81%d0%be%d0%bb%d0%b8%d0%bb%d1%86%d0%be%d0%be/"><p>Номын сан хоорондын солилцоо</p></Link>
        <Link href="https://nationallibrary.mn/blog-portfolio-3-columns/"><h2 className={styles.linked}>МЭДЭЭ</h2></Link>
        <h2 className={styles.active}>ҮЗЭСГЭЛЭН</h2>
        <Link href="http://122.201.23.45/"><h2 className={styles.linked}>КАТАЛОГ</h2></Link>
        <Link href="https://nationallibrary.mn/100-%d0%b6%d0%b8%d0%bb/"><h2 className={styles.linked}>100ЖИЛ</h2></Link>
        <Link href="http://360.nationallibrary.mn/"><h2 className={styles.linked}>360</h2></Link>
      <ThemeToggler handler={handleTheme} isChanged={themeChanged}/>
      </div>
    </div>
  );
};

export default Menu;
