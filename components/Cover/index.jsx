//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
//import STORE from '@/store'

//Styles must be imported here
import styles from './Cover.module.scss'
import librarycover from "@/public/librarycover.jpeg"

const Cover = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.img}>     
                <Image
                    alt="librarycover"
                    src={librarycover}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                /> 
            </div>
            <div className={styles.textContainer}>
                <h2>Номын Баяр</h2>
                <p>Монголын үндэсний төв номын сангийн 100 жилийн ой</p>
            </div> 
        </div>
    )
};

export default Cover;