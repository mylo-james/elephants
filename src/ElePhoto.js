function ElePhoto({ elePhoto }) {
  return (
    <div className="eleWrapper">
      {elePhoto ? (
        <img src={elePhoto} alt="an elephant" />
      ) : (
        <p>Pick an Elephant!</p>
      )}
    </div>
  );
}

export default ElePhoto;
