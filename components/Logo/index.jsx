//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'

//import STORE from '@/store'

import styles from "./Logo.module.scss";
import logo from "@/public/logo.jpeg"

const Logo = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>     
        <Image
            alt="Logo"
            src={logo}
            layout="fill"
            objectFit="cover"
            quality={100}
          /> 
      </div>     
    </div>
  );
};

export default Logo;
