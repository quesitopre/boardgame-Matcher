export default function Header() {
    return (
        <header style= {{ 
          backgroundColor: "#eeeeee",
          padding: "1rem",
          color: "#71a0a5", 
          fontFamily: "verdana"}}>
            <nav>
                <Link href="/"> Browse Games </Link>
                <Link href="/"> How It Works </Link>
                <Link href = "/"> About </Link>
            </nav>
        </header>
    )
}