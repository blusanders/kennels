import React from "react"
import "./Kennel.css"

const locVar = "East Nashville"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the {locVar} Location</div>
            <div>500 Puppy Way</div>
        </address>
    </>
)