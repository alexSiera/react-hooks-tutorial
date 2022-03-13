import React from "react";

// const Buttons = ({ onPlus, onMinus }) => {
//   console.log("Buttons render");
//   return (
//     <div>
//       <button onClick={onPlus}>+</button>
//       <button onClick={onMinus}>-</button>
//     </div>
//   );
// };
// Ререндер исправляется использованием memo........Он жестко смотрит что пропы поменялись если нет то ререндера не будет!!!!
const Buttons = React.memo(({ onPlus, onMinus }) => {
  console.log("Buttons render");
  return (
    <div>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  );
});
export default Buttons;
