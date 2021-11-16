//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
import Link from 'next/link'
//import STORE from '@/store'

//Styles must be imported here
import styles from './List.module.scss'
import cover1 from '../../public/cover1.jpg'
import cover2 from '../../public/cover2.jpg'
import cover3 from '../../public/cover3.jpg'
import cover4 from '../../public/cover4.jpg'
import cover5 from '../../public/cover5.jpg'

const List = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column}>
                <Link href="/exhibition1" passHref>
                    <div className={styles.shadow}>
                    <div className={styles.img}>     
                        <Image
                            alt="librarycover"
                            src={cover1}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        /> 
                    <div className={styles.textContainer}>
                    </div> 
                    </div>
                    </div>
                    </Link>
                </div>
                <div className={styles.column}>
                <Link href="/exhibition2" passHref>
                    <div className={styles.img}>     
                        <Image
                            alt="librarycover"
                            src={cover2}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        /> 
                       <div className={styles.textContainer}>
                    </div> 
                    </div>
                    </Link>
                </div>
                <div className={styles.column}>
                <Link href="/exhibition3" passHref>
                    <div className={styles.img}>     
                        <Image
                            alt="librarycover"
                            src={cover3}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        /> 
                        <div className={styles.textContainer}>
                    </div> 
                    </div>
                    </Link>
                </div>
            </div>
            <div className={styles.row}>
            <div className={styles.column}>
                <Link href="/exhibition4" passHref>
                        <div className={styles.img}>     
                            <Image
                                alt="librarycover"
                                src={cover4}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            /> 
                        <div className={styles.textContainer}>
                    </div> 
                        </div>
                                            </Link>
                    </div>
            <div className={styles.column}>
                <Link href="/exhibition5" passHref>
                    <div className={styles.img}>
                        <Image
                            alt="librarycover"
                            src={cover5}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        /> 
                        <div className={styles.textContainer}>
                        </div> 
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default List;