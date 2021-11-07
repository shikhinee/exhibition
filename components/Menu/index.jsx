//Next, React (core node_modules) imports must be placed here

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
      <ul>
        <li>Үзэсгэлэн</li>
        <li>Нүүр хуудас</li>
        <li>Холбогдох</li>
      </ul>
      <ThemeToggler handler={handleTheme} isChanged={themeChanged}/>
    </div>
  );
};

export default Menu;
