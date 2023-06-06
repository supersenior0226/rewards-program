// Import useState and useEffect hooks
import { useState, useEffect } from "react";

// Define a custom hook for fetching data from an API
function useFetch(url) {
    // Use the useState hook to store the data, error, and loading state
    const [data, setData] = useState(null); // initialize data as null
    const [error, setError] = useState(null); // initialize error as null
    const [loading, setLoading] = useState(true); // initialize loading as true

    // Use the useEffect hook to fetch data when the component mounts or the url changes
    useEffect(() => {
        // Define an async function that fetches data from the url
        async function fetchData() {
            try {
                // Use the fetch API to make a GET request to the url
                let response = await fetch(url);

                // Check if the response is ok (status code 200-299)
                if (response.ok) {
                    // Parse the response body as JSON data
                    let data = await response.json();

                    // Set the data state with the parsed data
                    setData(data);

                    // Set the error state to null
                    setError(null);
                } else {
                    // Throw an error with the status text
                    throw new Error(response.statusText);
                }
            } catch (error) {
                // Catch any error and set the error state with the error message
                setError(error.message);
            } finally {
                // Set the loading state to false
                setLoading(false);
            }
        }

        // Call the async function
        fetchData();
    }, [url]); // pass the url as a dependency to the useEffect hook

    // Return an object with the data, error, and loading state
    return { data, error, loading };
}

// Export the custom hook
export default useFetch;