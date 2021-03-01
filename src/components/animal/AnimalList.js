import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
const { animals, getAnimals } = useContext(AnimalContext)
const { locations, getLocations } = useContext(LocationContext)
const { customers, getCustomers } = useContext(CustomerContext)

//useEffect - reach out to the world for something
useEffect(() => {
    console.log("AnimalList: Initial render before data")
getLocations()
.then(getCustomers)
.then(getAnimals)
}, [])

return (
    <div className="animals">
        {console.log("AnimalList: Render", animals)}
        {
        animals.map(animal => {

          owner = customers.find(c => c.id === animal.customerId) 
          location  = locations.find(l => l.id === locations.customerId) 

            return <AnimalCard
            key={animal.id}
            location={location}
            customer={owner}
            animal={animal} />
        })
        }
    </div>
    )
}

