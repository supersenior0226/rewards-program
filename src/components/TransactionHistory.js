// Import React and useEffect hook
import React, { useEffect } from "react";
// Import the custom hook for fetching data
import useFetch from "../hooks/useFetch";

// Define a function component for the transaction history page
function TransactionHistory() {
    // Use the custom hook to fetch the transactions data from the API
    const { data: transactions, error, loading } = useFetch(
        "/api/transactions"
    );

    // Use the useEffect hook to log the error if any
    useEffect(() => {
        if (error) {
            console.error(error);
        }
    }, [error]);

    // Return the JSX element for rendering
    return (
        <div className="transaction-history">
            <h2>Transaction History</h2>

            {/* Show a loading message while fetching data */}
            {loading && <p>Loading...</p>}

            {/* Show an error message if there is an error */}
            {error && <p>Something went wrong</p>}

            {/* Show a table of transactions if data is available */}
            {transactions && (
                <table>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Loop through the transactions array and render a table row for each transaction */}
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.customer}</td>
                                <td>{transaction.date}</td>
                                <td>${transaction.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

// Export the component
export default TransactionHistory;
