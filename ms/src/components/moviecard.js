import {Link} from 'react-router-dom'

export default function MovieCard({ img, title, year, gen, dir, act, imdbRating, awards, slug }) {
    return (
      <section className="movie">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>Year: <span>{year}</span></p>
        <p>Genre: <span>{gen}</span></p>
        <p>Director: <span>{dir}</span></p>
        <p>Actors: <span>{act}</span></p>
        <p>Rating: <span>{imdbRating}</span></p>
        <p>Awards: <span>{awards}</span></p>
        <Link to={slug} className="link">View Details</Link> // add link text
      </section>
    )
  }