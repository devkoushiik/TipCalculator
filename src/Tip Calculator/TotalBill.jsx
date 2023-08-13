const TotalBill = ({ bill, setBill }) => {
  return (
    <div>
      <div>
        <h1>Tip Calculator</h1>
      </div>
      <div>
        <h3>How much was the bill?</h3>
        <input
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          type="text"
        />
      </div>
    </div>
  );
};
export default TotalBill;
