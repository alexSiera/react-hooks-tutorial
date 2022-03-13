import React, { useCallback, useState } from "react";

import Buttons from "./Buttons";

// Так как ф-ии onPlus и onMinus мы передаем в компонент Buttons то получается при ререндере компонента App ререндериться и компонент Buttons так как ссылки на ф-ии поменялись
// Use Callback используется для сохранения ф-ии между ререндерами компонента.
const App = () => {
  const [count, setCounter] = useState(0);
  //  В таком случае если использовать старый вариант ф-ии будет происходить постоянный ререндер Buttons так как менятся ссылка на ф-ию.
  const onPlus = () => setCounter((c) => c + 1);
  // 1. Решение с useCallback. Однако useCallback не помогает решить проблему лишнего ререндера который должен решать useMemo.
  //
  // const onPlus = useCallback(() => {
  //   setCounter((c) => c + 1);
  // }, []);
  // const onMinus = () => setCounter((c) => c - 1);
  // 1. Решение с useCallback.
  const onMinus = useCallback(() => {
    setCounter((c) => c - 1);
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <Buttons onPlus={onPlus} onMinus={onMinus} />
    </div>
  );
};
export default App;
