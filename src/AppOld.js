/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useCallback, useEffect, useRef } from "react";

function App() {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);
  // const timerRef = React.useRef();
  const ulRef = useRef();
  //Решение через useRef
  const numbersRef = useRef();
  //При каждом рендере обновлять значение numbersRef.
  numbersRef.current = numbers;
  const addNumber = () => {
    setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
  };
  // const handleScroll = useCallback(() => {
  //   console.log("Был скролл", numbers);
  // }, [numbers]);
  //Решение через useRef
  const handleScroll = useCallback(() => {
    console.log(numbersRef.current, "numbersRef");
  }, []);
  // Мое хак решение данной задачи через useEffect.
  // useEffect(() => {
  //   ulRef.current.removeEventListener("scroll", handleScroll);
  //   ulRef.current.addEventListener("scroll", handleScroll);
  // }, [handleScroll, numbers]);
  const start = () => {
    // timerRef.current = setInterval(addNumber, 1000);
    ulRef.current.addEventListener("scroll", handleScroll);
  };
  // Данная ф-ия будет пересоздаваться при каждом ререндере компонента, соответственно СТОП не будет работать!!!!
  // const handleScroll = () => {
  //   console.log("Был скролл");
  // };
  // Пустой массив зависимостей говорит что эту ф-ию не нужно пересоздавать при каждом рендере (соответвенно не теряется ссылка)
  // Однако данная ф-ия замыкается с первым значением numbers которые были при создании ф-ии.
  // Поэтому можно указать переменную numbers чтобы иметь актуальное значение переменной, однако это тоже не решает проблему, так как получается так что мы пересоздаем ф-ию однако addEventListener замыкается с первой ф-ией handleScroll и ничего не знает про обновление

  const stop = () => {
    // console.log(timerRef.current);
    // clearInterval(timerRef.current);
    ulRef.current.removeEventListener("scroll", handleScroll);
  };

  return (
    <div>
      <ul ref={ulRef}>
        {numbers.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <button onClick={addNumber}>✅ Добавить число</button>
      <button onClick={start}>▶️ Старт</button>
      <button onClick={stop}>⏹ Стоп</button>
    </div>
  );
}

export default App;

// function EtoMoyaFunkciya(name, age = 0) {
//   const haveAge = age > 0;
//   const getInfo = () => {
//     return `Moe imia, ${name}`;
//   };
//   return getInfo(name);
// }
// EtoMoyaFunkciya("Zynbenki mix petr", 45);
