import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <StyledEngineProvider>
        <Navbar />
      </StyledEngineProvider>
    </>
  );
}
