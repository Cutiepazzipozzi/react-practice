function Movie({title, medium_cover_image, summary, genres}) {
    <div>
        <h2>{title}</h2>
        <img src={medium_cover_image} alt={title}/>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => {
                <li key={g}>{g}</li>
            })}
        </ul>
    </div>
}

export default Movie