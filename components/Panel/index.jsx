//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'
import { useState } from "react";
import styles from "./Panel.module.scss";
import Projects from "../Projects"; 
import Thread from "../Thread";
const Panel = (props) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className={styles.container}>
      <h2>Tasks</h2>
      <div className={styles.tabsContainer}>
        <div
          className={
            toggleState === 1
              ? `${styles.tabs} ${styles.activeTabs}`
              : `${styles.tabs}`
          }
          onClick={() => toggleTab(1)}
        >
          FEED
        </div>
        <div
          className={
            toggleState === 2
              ? `${styles.tabs} ${styles.activeTabs}`
              : `${styles.tabs}`
          }
          onClick={() => toggleTab(2)}
        >
          LIST
        </div>
        <div
          className={
            toggleState === 3
              ? `${styles.tabs} ${styles.activeTabs}`
              : `${styles.tabs}`
          }
          onClick={() => toggleTab(3)}
        >
          TODO
        </div>
      </div>
      <div className={styles.contentTabs}>
        <div
          className={
            toggleState === 1
              ? `${styles.content}  ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <Projects />
          <Thread />
          <Projects />
          <Projects />
        </div>

        <div
          className={
            toggleState === 2
              ? `${styles.content}  ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <h2>Content 2</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe illum repudiandae magnam asperiores mollitia, perspiciatis veritatis? Atque iste, ex molestiae a vitae doloribus, excepturi deserunt provident sunt sint optio? Animi?
            Dolores pariatur sapiente harum obcaecati consequatur rerum dolore. Id odio eius a, quod, aspernatur voluptatem aliquid repellendus quis maxime cum molestias obcaecati, deleniti assumenda quidem quos iste repudiandae pariatur asperiores!
          </p>
        </div>

        <div
          className={
            toggleState === 3
              ? `${styles.content}  ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <h2>Content 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Panel;
