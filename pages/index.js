import styles from '../styles/Home.module.css'
import Link from 'next/Link'

export default function Home() {
  return (
    <div >
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>
      dsfljl jaEst eu nisi culpa dolor enim occaecat. Tempor veniam nisi ullamco anim deserunt ea esse reprehenderit labore ullamco nulla id. Esse exercitation nulla et est labore laborum aliqua fugiat.
      fsadefr
      lorem
      </p>

      <p className={styles.text}>
        howe foaeae
      </p>
      <Link href="/alphas">
        <a className={styles.btn}>Show alpha Listings</a>
      </Link>
    </div>
  )
}