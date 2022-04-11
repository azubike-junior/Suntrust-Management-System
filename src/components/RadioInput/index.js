import React from "react";

export const RadioInput = ({ label, value, checked, setter }) => {
  return (
    <>
      {/* <label>
        <input
          type="radio"
          checked={checked == value}
          onChange={() => setter(value)}
        />
        <span>{label}</span>
      </label> */}
      <label class="radio_group mr-4">
        <input
          checked={checked == value}
          onChange={() => setter(value)}
          type="radio"
        />
        <label for="rating_1">{label}</label>
      </label>
    </>
  );
};
