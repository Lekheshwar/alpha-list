import styles from '../../styles/Alphas.module.css';
import Link from 'next/link'

export const getStaticProps = async () => { // This runs before the the component is rendered
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { alphas: data }
    }
}





export default function index({ alphas }) {
    return (
        <div>
            <h1>Alpha Listings</h1>
            {alphas.map(alpha => (
                <Link href={`/alphas/${alpha.id}`} key={alpha.id}>
                    <a className={styles.single}>
                        <h3>{alpha.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}
