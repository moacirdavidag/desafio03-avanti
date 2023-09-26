import "./style.css";
import { FaStar, FaClock, FaCalendar } from 'react-icons/fa';

export const Movie = ({ title, poster, vote, year, detailsMovieEvent }) => {

    return (
        <>
            <div className="movie">
                <div className="title">
                    <span>{title}</span>
                    <div>
                        <p><FaStar /> {vote}</p>
                    </div>
                </div>
                <div className="poster">
                    <img src={poster} />

                    <div className="info">
                        <div className="duration">
                            <span><FaClock /> 1:54:00</span>
                        </div>
                    </div>

                </div>
                <div className="year">
                    <span><FaCalendar /> {year}</span>
                </div>
                <button onClick={detailsMovieEvent}>
                    Detalhes
                </button>
            </div>
        </>
    )
}