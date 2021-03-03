import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

// export const AnimalCard = ({ animal, customer, location }) => (
//     <section className="animal">
//         <h3 className="animal__name">Name: {animal.name}</h3>
//         <div className="animal__breed">Breed: {animal.breed}</div>
//         <div className="animal__customerId">Customer: {customer.name}</div>
//         <div className="animal__locationId">Location: {location.name}</div>
//     </section>
// );

export const AnimalCard = ({ animal }) => {
    return (
        <section className="animal">
        <h3 className="animal__name">
            <Link to={`/animals/detail/${animal.id}`}>
            { animal.name }
            </Link>
        </h3>
        <div className="animal__breed">{ animal.breed }</div>
    </section>
)}