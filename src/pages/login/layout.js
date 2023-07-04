export default function LoginLayout({ children }) {
    return (
        <section>
            <div className='container'>
                <nav>
                    <h1>Please login to continue!</h1>
                </nav>
                {children}
            </div>
        </section>
    )
}