import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PropertyList } from "./components/PropertyList";
import { SearchBar } from "./components/SearchBar";
import { properties } from "./data/properties";

function App() {
  const [ city, setCity ] = useState("");
  const [ search, setSearch ] = useState("");
  const [ propertiesFromAPI, setpropertiesFromAPI ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isError, setIsError ] = useState(null);

  useEffect( () => {
    const timerId = setTimeout( () => {
      try {
        setpropertiesFromAPI(properties);
      } catch {
        setIsError("No pudimos cargar las propiedades")
      } finally {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  const filteredProperties = propertiesFromAPI.filter ( (property) => {
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