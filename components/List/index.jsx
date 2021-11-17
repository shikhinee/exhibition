//Next, React (core node_modules) imports must be placed here
import Image from 'next/image'
import Link from 'next/link'
//import STORE from '@/store'

//Styles must be imported here
import styles from './List.module.scss'

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
                                    src="/Cover1.png"
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
                                src="/Cover2.png"
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
                                src="/Cover3.png"
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
                                src="/Cover4.png"
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
                                src="/Cover5.png"
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