import { useSelector } from "react-redux";

import React from "react";

function FruitsPage() {
  const fruits = useSelector((state) => state.fruits);
  return (
    <div >
         
      {fruits.map((fruit) => (
           <div class="w3-card-4">
        <p key={fruit}>{fruit}</p>
        </div>
      ))}
    </div>
  );
}

export default FruitsPage;
