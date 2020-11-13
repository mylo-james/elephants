import EleInput from './EleInput';
function EleForm({ pics, setElePhoto }) {
    return (
        <form>
            {pics.map((pic) => (
                <EleInput key={pic.name} setElePhoto={setElePhoto} pic={pic} />
            ))}
        </form>
    );
}
export default EleForm;
