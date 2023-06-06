// Import React and useEffect hook
import React, { useEffect } from "react";
// Import React Router useParams hook
import { useParams } from "react-router-dom";
// Import the custom hook for fetching data
import useFetch from "../hooks/useFetch";

// Define a function component for the rewards page for a single customer
function RewardsCustomer() {
    // Use the useParams hook to get the customer ID from the URL
    const { customerId } = useParams();

    // Use the custom hook to fetch the rewards data for the customer from the API
    const { data: rewards, error, loading } = useFetch(
        `/api/rewards/${customerId}`
    );

    // Use the useEffect hook to log the error if any
    useEffect(() => {
        if (error) {
            console.error(error);
        }
    }, [error]);

    // Return the JSX element for rendering
    return (
        <div className="rewards-customer">
            <h2>Rewards for {customerId}</h2>

            {/* Show a loading message while fetching data */}
            {loading && <p>Loading...</p>}

            {/* Show an error message if there is an error */}
            {error && <p>Something went wrong</p>}

            {/* Show a summary of rewards if data is available */}
            {rewards && (
                <>
                    <p>Total points: {rewards.total}</p>
                    <p>Monthly points: {rewards.monthly.join(", ")}</p>
                </>
            )}
        </div>
    );
}

// Export the component
export default RewardsCustomer;
