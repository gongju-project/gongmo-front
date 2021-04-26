import Header from '../header'
import styles from '../../styles/Home.module.css'
import Contact from '../../utils/contact'
import Experience from './experiences'
import Projects from './projects'

const Work = () => {
	const onClickTitle = () => {
		location.href = "/"
	}
	return (<div className={styles.container}>
	<Header></Header>
	<main className={styles.main}>
		<Contact></Contact>
		<Experience></Experience>
		<Projects></Projects>
	</main>

	<footer className={styles.footer}>
		<div className={styles.flex}><img src='/phone-png.png' className={styles.img}></img><a>010-2754-1750</a></div>
		<div className={styles.flex}><img src='/email.png' className={styles.img}></img><a>bakjuna@gmail.com</a></div>
	</footer>
</div>)
}

export default Work
