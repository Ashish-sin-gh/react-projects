import { useEffect, useState } from "react";

function useCurrencyData(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    // console.log(data);
    // (async function () {
    //   const res = await fetch(
    //     `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    //   );
    //   const res2 = await res.json();
    //   await setData(res2[currency]);
    // })();
  }, [currency]);
  console.log(data);

  return data;
}

export default useCurrencyData;
