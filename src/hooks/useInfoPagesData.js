import { useState, useEffect } from "react";

export default function useInfoPagesData(data, filterData, pageKey) {
  const [pageData, setPageData] = useState({
    Name: "",
    Contenu: "",
  });
  useEffect(() => {
    if (data.length === 0) return;
    setPageData(filterData(pageKey));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return pageData;
}
