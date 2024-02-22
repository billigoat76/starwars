import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Paginated({page, setPage}) {
  
  const handlePageChange = (e, np) => {
    setPage(np);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={9}
        page={page}
        onChange={handlePageChange}
        color="secondary"
      />
    </Stack>
  );
}
