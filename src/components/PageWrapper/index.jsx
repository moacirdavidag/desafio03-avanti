import { Header } from "../Header"
import { MovieWrapper } from "../MovieWrapper"
import "./style.css"
export const PageWrapper = () => {
    return (
        <>
            <section className="PageWrapper">
                <div className="container">
                    <Header></Header>
                    <MovieWrapper></MovieWrapper>
                </div>
            </section>
        </>
    )
}