import { useEffect, useState } from "react";

async function useCurrencyData(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    (async function () {
      const res = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      );
      const res2 = await res.json();
      setData(res2[currency]);
    })();
  }, [currency]);

  return data;
}

export default useCurrencyData;
