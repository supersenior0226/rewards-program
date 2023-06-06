// Import React and useEffect hook
import React, { useEffect } from "react";
// Import the custom hook for fetching data
import useFetch from "../hooks/useFetch";

// Define a function component for the dashboard page
function Dashboard() {
    // Use the custom hook to fetch the transactions data from the API
    const { data: transactions, error, loading } = useFetch(
        "/api/transactions"
    );

    // Use the custom hook to fetch the rewards data from the API
    const { data: rewards } = useFetch("/api/rewards");

    // Use the useEffect hook to log the error if any
    useEffect(() => {
        if (error) {
            console.error(error);
        }
    }, [error]);

    // Define a function that calculates the number of transactions per month
    function calculateCounts(transactions) {
        let counts = [0, 0, 0]; // initialize an array of three zeros
        for (let transaction of transactions) {
            let month = transaction.date.getMonth(); // get the month of the transaction (0-11)
            counts[month]++; // increment the count for the corresponding month
        }
        return counts;
    }

    // Define a function that calculates the number of customers per month
    function calculateCustomers(transactions) {
        let customers = [0, 0, 0]; // initialize an array of three zeros
        let seen = new Set(); // initialize an empty set to keep track of seen customers
        for (let transaction of transactions) {
            let month = transaction.date.getMonth(); // get the month of the transaction (0-11)
            let customer = transaction.customer; // get the customer name
            if (!seen.has(customer)) {
                // if the customer is not seen before
                customers[month]++; // increment the customer count for the corresponding month
                seen.add(customer); // add the customer to the seen set
            }
        }
        return customers;
    }

    // Return the JSX element for rendering
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>

            {/* Show a loading message while fetching data */}
            {loading && <p>Loading...</p>}

            {/* Show an error message if there is an error */}
            {error && <p>Something went wrong</p>}

            {/* Show a summary of transactions and rewards if data is available */}
            {transactions && rewards && (
                <>
                    <p>Total transactions: {transactions.length}</p>
                    <p>Total rewards: {rewards.total}</p>
                    <p>Total customers: {Object.keys(rewards.customers).length}</p>
                    {/* Show a table of transactions and rewards per month */}
                    <table>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Transactions</th>
                                <th>Rewards</th>
                                <th>Customers</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Loop through the months and render a table row for each month */}
                            {["May", "June", "July"].map((month, index) => (
                                <tr key={index}>
                                    <td>{month}</td>
                                    <td>{calculateCounts(transactions)[index]}</td>
                                    <td>{rewards.monthly[index]}</td>
                                    <td>{calculateCustomers(transactions)[index]}</td>
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
export default Dashboard;
