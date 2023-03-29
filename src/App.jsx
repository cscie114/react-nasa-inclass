import { useState } from 'react';

import "./App.css";
import AstroDay from "./AstroDay";
import AstroSelect from "./AstroSelect";
import { formatDate } from "./utils";


const App = () => {
  let [date, setDate] = useState(null);

  const handleDateChange = (date) => {
    console.log("handleDateChange", date);
    setDate(date);
  }

  if(!date) {
    let today = new Date();
    today.setHours(0,0,0,0);
    date = formatDate(today);
  }

  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <AstroSelect onDateChange={handleDateChange}></AstroSelect>
      <AstroDay date={date}></AstroDay>
    </div>
  );
}

export default App;
