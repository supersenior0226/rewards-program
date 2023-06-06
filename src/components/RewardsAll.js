// Import React and useEffect hook
import React, { useEffect } from "react";
// Import React Router Link component
import { Link } from "react-router-dom";
// Import the custom hook for fetching data
import useFetch from "../hooks/useFetch";

// Define a function component for the rewards page for all customers
function RewardsAll() {
    // Use the custom hook to fetch the rewards data from the API
    const { data: rewards, error, loading } = useFetch("/api/rewards");

    // Use the useEffect hook to log the error if any
    useEffect(() => {
        if (error) {
            console.error(error);
        }
    }, [error]);

    // Return the JSX element for rendering
    return (
        <div className="rewards-all">
            <h2>Rewards</h2>

            {/* Show a loading message while fetching data */}
            {loading && <p>Loading...</p>}

            {/* Show an error message if there is an error */}
            {error && <p>Something went wrong</p>}
            
            {/* Show a summary of rewards if data is available */}
            {rewards && (
                <>
                    <p>Total points: {rewards.total}</p>
                    <p>Monthly points: {rewards.monthly.join(", ")}</p>
                    {/* Show a table of rewards for each customer */}
                    <table>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Points</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Loop through the customers object and render a table row for each customer */}
                            {Object.entries(rewards.customers).map(([customer, points]) => (
                                <tr key={customer}>
                                    <td>{customer}</td>
                                    <td>{points}</td>
                                    {/* Use a link to navigate to the rewards page for each customer */}
                                    <td>
                                        <Link to={`/rewards/${customer}`}>View details</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}

// Export the component
export default RewardsAll;