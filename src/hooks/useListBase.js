import { useEffect, useState } from "react";
import base from "../api/base";
import { viewType } from "../api/config";

// get a records from DB table passing view param
export default function useListBase(tableName, view) {
  const [data, setData] = useState([]);

  useEffect(() => {
    base(tableName)
      .select({ view: view ? view : viewType.grid })
      .eachPage((records, fetchNextPage) => {
        const recordsFields = records.map((record) => record.fields);
        setData((prev) => [...prev, ...recordsFields]);
        fetchNextPage();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
}
