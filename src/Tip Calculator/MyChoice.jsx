const MyChoice = ({ myChoice, setMyChoice }) => {
  return (
    <div>
      <h3>How did you like the service?</h3>{" "}
      <select value={myChoice} onChange={(e) => setMyChoice(e.target.value)}>
        <option value={0}>Dissatisfied 0%</option>
        <option value={5}>I was ok 5%</option>
        <option value={10}>It was good 10%</option>
        <option value={20}>Absolutely amazing 20%</option>
      </select>
    </div>
  );
};
export default MyChoice;
