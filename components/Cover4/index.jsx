//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
//import STORE from '@/store'

//Styles must be imported here
import styles from './Cover.module.scss'
import cover from "@/public/Cover4.jpg"

const Cover = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.img}>     
                <Image
                    alt="cover"
                    src={cover}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                /> 
            </div>
            <div className={styles.shadow}>
            <div className={styles.textContainer}>
                <h1>Оюуны оxь</h1>
                <h2>Цахим үзэсгэлэн</h2>
            </div> 
            </div>
        </div>
    )
};

export default Cover;