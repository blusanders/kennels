import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";

import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { AnimalForm } from "./animal/AnimalForm";

import { CustomerList } from "./customer/CustomerList";
import { CustomerProvider } from "./customer/CustomerProvider";

import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { LocationForm } from "./location/LocationForm";

import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm";

export const ApplicationViews = () => {
return (
    <>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
        <Home />
        </Route>

        {/* Render the animal list when http://localhost:3000/animals */}

        <AnimalProvider>
            <LocationProvider>
                <CustomerProvider>
                    {/* Note the addition of "exact" now that we have an additional route with "/animals" in it below this Route: "/animals/create" */}
                    <Route exact path="/animals">
                        <AnimalList />
                    </Route>

                    <Route path="/animals/create">
                        <AnimalForm />
                    </Route>
                </CustomerProvider>
            </LocationProvider>
        </AnimalProvider>

        {/* Render the location list when http://localhost:3000/locations */}
        <LocationProvider>
            <Route exact path="/locations">
                <LocationList />
            </Route>
            <Route path="/employees/create">
                <LocationForm />
            </Route>
        </LocationProvider>

        {/* Render the customer list when http://localhost:3000/customers */}
        <CustomerProvider>
            <Route path="/customers">
                <CustomerList />
            </Route>
        </CustomerProvider>

        {/* Render the Employee list when http://localhost:3000/employees */}
        <LocationProvider>
            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
                <Route path="/employees/create">
                    <EmployeeForm />
                </Route>
            </EmployeeProvider>
        </LocationProvider>
    </>
    );
};
