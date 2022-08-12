const Card = ({ entry }) => {
  return (
    <div className="card-list">
      <div className="card">
        <div className="poster">
          <img className="poster-img" src={entry.images['Poster Art'].url} />
        </div>
        <div className="title">{entry.title}</div>
      </div>
    </div>
  );
};

export default Card;
