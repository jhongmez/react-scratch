import { ChangeEvent, ComponentProps } from "react";

type searchBarProps = {
	value: string;
	searchedValue: string;
	onChange: (value: string) => void;
	onSearch: (value: string) => void;
	onClear: () => void;
}

export function SearchBar({ 
	value, 
	searchedValue, 
	onChange,
	onSearch,
	onClear
}: searchBarProps) {

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	}

	const handleSubmit: NonNullable<ComponentProps<"form">["onSubmit"]> = (event) => {
		event.preventDefault();
		onSearch(value.trim());
	}

	return (
		<>
			<form className="search-section" onSubmit={handleSubmit}>
				<label>
					Ciudad
					<span className="city-input-wrapper">
					<input 
						type="text" 
						placeholder="Buscar por ciudad" 
						value={value} 
						onChange={(event) => handleChange(event)} 
					/>
					{( value || searchedValue ) && (
						<button
							className="clear-city-button"
							type="button"
							onClick={onClear}
						>
							x
						</button>
					)}
					</span>
				</label>
				<label>
					Tipo
					<input type="text" placeholder="Apartamento" />
				</label>
				<label>
					Huéspedes
					<input type="number" placeholder="0" />
				</label>
				<button>Buscar</button>
			</form>
			<p className="current-search">
				Resultado de búsqueda: <strong>{ searchedValue || "Sin búsqueda" }</strong>
			</p>
		</>
	);
}