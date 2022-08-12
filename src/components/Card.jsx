const Card = ({ poster, title, overlay, onClick, defaultPoster }) => {
  console.log('poster', poster);
  if (poster.width < 10) poster = defaultPoster;
  return (
    <div className="card-list" onClick={onClick}>
      <div className="card">
        <div className="poster">
          <div className="overlay" style={{ backgroundImage: { poster } }}>
            {overlay}
          </div>
          <img
            className="poster-img"
            src={poster}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = defaultPoster;
            }}
          />
        </div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default Card;
