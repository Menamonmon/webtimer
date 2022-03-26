import React from "react";
import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { MemoryRouter, Route, Routes } from "react-router";
import Websites from "./pages/Websites";
import AddWebsite from "./pages/AddWebsite";
import EditWebsite from "./pages/EditWebsite";

function App() {
  return (
    <ChakraProvider>
      <MemoryRouter>
        <Box className="App">
          <Routes>
            <Route path="/" element={<Websites />} />
            <Route path="add-website" element={<AddWebsite />} />
            <Route path="websites/edit" element={<Websites />}>
              <Route path="edit/:websiteId" element={<EditWebsite />} />
            </Route>
          </Routes>
        </Box>
      </MemoryRouter>
    </ChakraProvider>
  );
}

export default App;
