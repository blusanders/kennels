import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => (
    <>
        <div>
            <div>
                <h2>Nashville Kennels</h2>
                Loving care when you're not there.
            </div>
            <div>
                Hi {localStorage.getItem('kennel_customerName') || ''}
            </div>
        </div>
    </>
)

