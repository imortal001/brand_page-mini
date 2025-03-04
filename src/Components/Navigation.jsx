const Navigation = () => {
    return (
        <nav className="container">
            <div className="logo">
                <img src="/public/brand_logo.png" alt="logo" />
            </div>
            <ul>
                <li href="/"><a>Home</a></li>
                <li href="/"><a> About</a></li>
                <li href="/"><a>Contact</a></li>
                <li href="/"><a>Services</a></li>
            </ul>
            <button> Login</button>
        </nav>
    )
}


export default Navigation