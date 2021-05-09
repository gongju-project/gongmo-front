import styles from '../styles/Home.module.css'

const Footer = () => {

	return (
	<footer className={styles.footer}>
		<div className={styles.flex}><img src='/phone-png.png' className={styles.img}></img><a>010-2754-1750</a></div>
		<div className={styles.flex}><img src='/email.png' className={styles.img}></img><a>bakjuna@gmail.com</a></div>
	</footer>
	)
}

export default Footer