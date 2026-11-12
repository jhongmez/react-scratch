import { PropertyCard } from "./PropertyCard";
import { properties } from "../data/properties";

export function PropertyList() {
    return (
        <section className="properties-section">
            <h3>Alojamientos disponibles</h3>
            <div className="properties-grid">
                {properties.map((property) => (
                    <PropertyCard
                        key={property.id}
                        title={property.title}
                        location={property.location}
                        price={property.price}
                        image={property.image}
                        type={property.type}
                    />
                ))}
            </div>
        </section>
    );
}