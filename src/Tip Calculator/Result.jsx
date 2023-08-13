const Result = ({ data }) => {
  const { total, billInPercent, bill, setBill } = data;
  return (
    <div>
      <h1>
        YOU PAY ${bill ? Number.parseFloat(total) : 0} ($
        {bill ? Number.parseFloat(bill) : 0}+$
        {billInPercent ? Number.parseFloat(billInPercent) : 0} Tip)
      </h1>
      <button onClick={() => setBill(0)}>Reset</button>
    </div>
  );
};
export default Result;
