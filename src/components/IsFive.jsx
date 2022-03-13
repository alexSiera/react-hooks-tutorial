import React from "react";

let renderCount = 0;

export default React.memo(
  function IsFive({ value }) {
    console.warn(`🔴 isFive render: ${++renderCount}`);
    // Memo func
    const getResult = React.useMemo(() => {
      let i = 0;
      while (i < 600000000) i++;
      return value === 5 ? "✅ Это пять :D" : "❌ Это не пять :(";
    }, [value]);
    // Old func
    // const getResult = () => {
    //   let i = 0;
    //   while (i < 600000000) i++;
    //   return value === 5 ? "✅ Это пять :D" : "❌ Это не пять :(";
    // };

    return <h3>{getResult}</h3>;
  },
  (prevProps, nextProps) => {
    if (nextProps.value === 5) {
      return false;
    }
    return true;
  }
);
