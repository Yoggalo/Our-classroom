import Calendar from "react-calendar";
import React, { useState } from 'react';


export default function Calendario() {
  const [value, onChange] = useState(new Date());
  return (
    <main>
      <Calendar onChange={onChange} value={value}/>
    </main>
  );
}
