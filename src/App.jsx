import { useState, useEffect } from "react";

import { Header } from "./components/layout/Header";
import { Hero } from "./components/ui/Hero";
import { PropertyList } from "./components/properties/PropertyList";
import { SearchBar } from "./components/ui/SearchBar";
import { properties } from "./data/properties";
import { filterProperties } from "./utils/filterProperties";

function App() {
  const [ city, setCity ] = useState("");
  const [ search, setSearch ] = useState("");
  const [ propertyList, setPropertyList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isError, setIsError ] = useState(null);

  useEffect( () => {
    const timerId = setTimeout( () => {
      try {
        setPropertyList(properties);
      } catch {
        setIsError("No pudimos cargar las propiedades")
      } finally {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  const filteredProperties = filterProperties(propertyList, search);

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Hero />

        <SearchBar 
        valueCity={city}
        searchedValue={search}
        onChange={setCity}
        onSearch={setSearch}
        onClear={ () => {
          setCity("");
          setSearch("");
        }}
        />

        { isLoading && <p>Cargando propiedades...</p> }

        { isError && <p>{ isError } </p> }
        
        { !isLoading && !isError && ( 
          <PropertyList properties={filteredProperties} />
        )}
      </main>
    </div>
  );
}

export default App;