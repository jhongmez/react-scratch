import { PropertyType } from "../../types/propertyType";

type PropertyCardProps = {
	property: PropertyType
}

export function PropertyCard({ property }: PropertyCardProps) {
	return (
		<article className="property-card">
			<img
				src={property.image}
				alt={property.title}
			/>
			<div className="property-card-content">
				<h4>{property.title}</h4>
				<p>{property.location}</p>
				<p>{property.type || "Tipo no especificado"}</p>
				<strong>${property.price}</strong>
			</div>
		</article>
	);
}