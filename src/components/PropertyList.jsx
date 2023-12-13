import PropertyItem from "./PropertyItem";

const PropertyList = ({ properties, category }) => {
    const filteredProperties = properties.filter(
        (property) => property.category === category
    );

    return (
        <div className="grid grid-cols-3 gap-5 justify-between">
            {filteredProperties.map((property) => {
                return <PropertyItem property={property} key={property.id} />;
            })}
        </div>
    );
};

export default PropertyList;
