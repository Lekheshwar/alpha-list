import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={100} height={70}/>
            </div>

            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/alphas">
                <a>Alpha List</a>
            </Link> 
        </nav>
    )
}
