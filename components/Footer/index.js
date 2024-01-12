import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <Link href="#" className={styles.footerlink}>Home</Link>
                <Link href="#" className={styles.footerlink}>About</Link>
            </div>
            &#169; Crystal Cheung 2023
        </footer>
    )
}