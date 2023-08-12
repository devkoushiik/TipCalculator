const Result = ({ data }) => {
  const { total, billInPercent, bill, setBill } = data;
  return (
    <div>
      <h1>
        YOU PAY ${false ? 0 : Number.parseFloat(total)} (${bill}+$
        {false ? 0 : Math.floor(billInPercent)} Tip)
      </h1>
      <button onClick={() => setBill(0)}>Reset</button>
    </div>
  );
};
export default Result;
