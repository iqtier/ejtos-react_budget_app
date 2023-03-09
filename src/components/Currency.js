import React, {  useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const handleChange = (e) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: e.target.value,
    });
  };
  return (
    <div class=" alert alert-success ">
      <label htmlFor="currency">Currency : </label>

      <select id="currency" onChange={handleChange}>
        <option value="$" selected>
          $ Dollar
        </option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
    </div>
  );
};

export default Currency;
