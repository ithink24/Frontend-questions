import { useEffect, useState } from "react";
import "./styles.css";

function useGetData({ search = "mor" }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((res) => res.json().then((result) => setData(result)))
      .catch((err) => console.log(err));
  }, [search]);

  return {
    data,
  };
}

export default function Debounce() {
  const [searchValue, setSearchValue] = useState("");
  const [debounceValue, setDebouceValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setDebouceValue(searchValue);
    }, 1000);
  }, [searchValue]);


  const { data } = useGetData({ search: debounceValue });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>Search</div>
      <input onChange={(e) => setSearchValue(e.target.value)} />
      {data?.results?.map((item, index) => (
        <div key={index}>{item?.name}</div>
      ))}
    </div>
  );
}
