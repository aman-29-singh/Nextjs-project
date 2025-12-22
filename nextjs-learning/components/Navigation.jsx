import Link from "next/link";

function Navigation(){
    return(
        <header className="bg-amber-500 grid grid-cols-2">
            <div>Aman Logo</div>
            <nav className="flex">
                <ul >
                    <li>
                        <Link href="/contact">contact</Link>
                    </li>
                    <li>
                        <Link href="/home">Home</Link>
                    </li>
                    <li>
                        <Link href= "/about"> About </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;