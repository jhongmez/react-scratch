import { useState } from "react";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PropertyList } from "./components/PropertyList";
import { SearchBar } from "./components/SearchBar";
import { properties } from "./data/properties";

function App() {
  const [ search, setSearch ] = useState("");

  const filteredProperties = properties.filter ( (property) => {
    const searchText = search.toLowerCase();

    return (
      property.title.toLowerCase().includes(searchText) ||
      property.type.toLowerCase().includes(searchText) ||
      property.location.toLowerCase().includes(searchText)
    );
  })

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Hero />

        <SearchBar onSearch={setSearch} />

        <PropertyList properties={filteredProperties} />
      </main>
    </div>
  );
}

export default App;