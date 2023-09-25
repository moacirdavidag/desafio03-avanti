import "./style.css";
import { FaStar, FaClock, FaCalendar } from 'react-icons/fa';

export const Movie = ({ title, poster, vote, year }) => {
    return (
        <>
            <div class="movie">
                <div class="title">
                    <span>Barbie</span>
                    <div>
                        <p><FaStar /> 4.9</p>
                    </div>
                </div>
                <div class="poster">
                    <img src="./assets/Poster.png" />

                    <div class="info">
                        <div class="duration">
                            <span><FaClock /> 1:54:00</span>
                        </div>
                    </div>

                </div>
                <div class="year">
                    <span><FaCalendar /> 2023</span>
                </div>
                <button>
                    <img src="./assets/icons/Play.png" alt="" />
                    <span>Assistir Trailer</span>
                </button>
            </div>
        </>
    )
}