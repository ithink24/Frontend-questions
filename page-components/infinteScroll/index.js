import React, { useEffect, useState } from "react";

const InfiniteScrollList = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreItems = () => {
    setLoading(true);
    setTimeout(() => {
      setItems((prev) => [...prev, ...Array.from({ length: 20 })]);
      setPage((prev) => prev + 1);
      setLoading(false);
    }, 1000); // simulate API call
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !loading
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div>
      {items.map((_, index) => (
        <div key={index} style={{ padding: 20, border: "1px solid #ccc" }}>
          Item {index + 1}
        </div>
      ))}

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
    </div>
  );
};

export default InfiniteScrollList;
