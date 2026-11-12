import { PropertyCard } from "./PropertyCard";

export function PropertyList() {
    return (
        <section className="properties-section">
            <h3>Alojamientos disponibles</h3>
            <div className="properties-grid">
                <PropertyCard 
                    title="Casa en la playa" 
                    location="Cancún" 
                    price={500}
                    image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" 
                />
                <PropertyCard 
                    title="Apartamento en la ciudad" 
                    location="Ciudad de México" 
                    price={300} 
                    image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" 
                />
                <PropertyCard 
                    title="Cabaña en las montañas" 
                    location="Chihuahua" 
                    price={200} 
                    image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" 
                />
            </div>
        </section>
    );
}