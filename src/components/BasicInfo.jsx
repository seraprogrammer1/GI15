import React from "react";

function Str ({ label, value }) {
  return `${label} : ${value}`;
}

export default function BasicInfo({ children }) {
  const arr = Object.entries(children);
  return (
    <>
    {arr.map(([label, value], index) => (
        <p key={index}><Str label={label} value={value} /></p>
    ))}
  </>
  )
}