export default function RootLayout({ children }) {
    return (
        <>
            <section>
                <div className='container'>
                    <nav>
                        <img src="/images/next.svg" alt="nextjs" width={150} height={50} />
                    </nav>
                {children}
                </div>
            </section>
        </>
    )
}