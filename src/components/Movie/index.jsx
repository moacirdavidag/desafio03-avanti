import "./style.css"
export const Movie = () => {
    return (
        <>
            <div class="movie">
                <div class="title">
                        <span>Barbie</span>
                        <div>
                            <img src="./assets/icons/Star.png" alt="nota"/>
                            <p>4.9</p>
                        </div>
                </div>

                <div class="poster">
                        <img src="./assets/Poster.png"/>

                        <div class="info">
                            <div class="duration">
                                <img src="./assets/icons/Clock.png" alt=""/>

                                <span>1:54:00</span>
                            </div>
                        </div>

                </div>

                <div class="year">
                        <img src="./assets/icons/CalendarBlank.png" alt=""/>
                        <span>2023</span>
                </div>

                <button>
                        <img src="./assets/icons/Play.png" alt=""/>
                        <span>Assistir Trailer</span>
                </button>
            </div> 
        </>
    )
}