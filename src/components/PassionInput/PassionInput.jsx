import React from 'react';

export default function PassionInput({name, value, onChange, type = "text"}) {
  return <div style={{ display: "flex", marginTop: "1rem"}}>
    <label htmlFor={name}>{name}:</label>
    <input id={name} value={value} onChange={e => onChange(e.target.value)} type={type}/>
  </div>
}