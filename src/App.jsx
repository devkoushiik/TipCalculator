import { useState } from "react";
import "./App.css";
import TotalBill from "./Tip Calculator/TotalBill";
import MyChoice from "./Tip Calculator/MyChoice";
import FrindChoice from "./Tip Calculator/FrindChoice";
import Result from "./Tip Calculator/Result";

function App() {
  const [bill, setBill] = useState(0);
  const [myChoice, setMyChoice] = useState(0);
  const [myFriendChoice, setMyFriendChoice] = useState(0);

  const x = myChoice / 100;
  const y = myFriendChoice / 100;

  const average_bill = (x + y) / 2;

  console.log(average_bill);

  const billInPercent = Number.parseFloat(bill) * average_bill;
  const total = Number.parseFloat(bill) + billInPercent;

  const data = {
    total,
    billInPercent,
    bill,
    setBill,
    setMyChoice,
    setMyFriendChoice,
  };

  return (
    <>
      <TotalBill bill={bill} setBill={setBill} />
      <MyChoice myChoice={myChoice} setMyChoice={setMyChoice} />
      <FrindChoice
        myFriendChoice={myFriendChoice}
        setMyFriendChoice={setMyFriendChoice}
      />
      <Result data={data} />
    </>
  );
}

export default App;
