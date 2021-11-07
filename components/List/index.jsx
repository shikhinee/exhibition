//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
//import STORE from '@/store'

//Styles must be imported here
import styles from './List.module.scss'
import librarycover from '@/public/librarycover.jpeg'
import picasso from '@/public/picasso.jpeg'
import schiele from '@/public/schiele.jpeg'
import davinci from '@/public/davinci.jpeg'
const List = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.img}>     
                        <Image
                            alt="librarycover"
                            src={librarycover}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        /> 
                    <div className={styles.textContainer}>
                        <h4>Номын Баяр</h4>
                        <p>Монголын үндэсний төв номын сангийн 100 жилийн ой</p>
                    </div> 
                    </div>

                </div>
                <div className={styles.column}>
                    <div className={styles.img}>     
                        <Image
                            alt="librarycover"
                            src={picasso}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        /> 
                       <div className={styles.textContainer}>
                        <h4>Номын Баяр</h4>
                        <p>Монголын үндэсний төв номын сангийн 100 жилийн ой</p>
                    </div> 
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.img}>     
                        <Image
                            alt="librarycover"
                            src={schiele}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        /> 
                        <div className={styles.textContainer}>
                        <h4>Номын Баяр</h4>
                        <p>Монголын үндэсний төв номын сангийн 100 жилийн ой</p>
                    </div> 
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                        <div className={styles.img}>     
                            <Image
                                alt="librarycover"
                                src={davinci}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            /> 
                        <div className={styles.textContainer}>
                        <h4>Номын Баяр</h4>
                        <p>Монголын үндэсний төв номын сангийн 100 жилийн ой</p>
                    </div> 
                        </div>
                    </div>
            </div>
        </div>
    )
};

export default List;