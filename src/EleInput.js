function EleInput({ pic, setElePhoto }) {
  
    const changeEle = (e) => {
    setElePhoto(e.target.value);
  };

  return (
    <label>
      {pic.name}
      <input
        onClick={changeEle}
        type="radio"
        name="elephants"
        value={pic.url}
      />
    </label>
  );
}

export default EleInput;
