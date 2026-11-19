import { PropertyType } from "../types/propertyType";

export function filterProperties(properties, searchText) {
    const normalizedSearch = searchText.trim().toLowerCase();

    if( !normalizedSearch ) return properties;

    return properties.filter( (property: PropertyType) => {
        return (
            property.title.toLowerCase().includes(searchText) ||
            property.type.toLowerCase().includes(searchText) ||
            property.location.toLowerCase().includes(searchText)
        );
    })
}