import { useState } from "react";

export function SearchBar() {
	const [city, setCity] = useState("");
	const [searchedCity, setSearchedCity] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		setSearchedCity(city.trim());
	}
	return (
		<>
			<form className="search-box" onSubmit={handleSubmit}>
				<label>
					Ciudad
					<input 
						type="text" 
						placeholder="Buscar por ciudad" 
						value={city} 
						onChange={(event) => setCity(event.target.value)} 
					/>
				</label>
				<label>
					Tipo
					<input type="text" placeholder="Apartamento" />
				</label>
				<label>
					Huéspedes
					<input type="number" placeholder="2" />
				</label>
				<button>Buscar</button>
			</form>
			<p className="current-search">
				Resultado de búsqueda: <strong>{ searchedCity || "Sin búsqueda" }</strong>
			</p>
		</>
	);
}