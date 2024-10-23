import React, { useState, useEffect } from "react";
import { useDebounce } from "./components/useDebounce";  // Assuming the debounce hook is in the same folder

function App() {
  const [searchTerm, setSearchTerm] = useState("");   // State to store the user input
  const debouncedSearchTerm = useDebounce(searchTerm, 500);  // 500ms debounce

  // Simulate an API call when debouncedSearchTerm changes
  useEffect(() => {
    if (debouncedSearchTerm) {
      // Simulating an API call
      console.log("API Call: Searching for", debouncedSearchTerm);
      // You can replace this console.log with an actual API call, e.g., fetchData(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);  // Effect depends on the debounced value

  return (
    <div className="App">
      <h1>Search with Debounce</h1>
      <input
        type="text"
        placeholder="Type something to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}  // Update searchTerm immediately
      />
      <p>Debounced Search Term: {debouncedSearchTerm}</p>
    </div>
  );
}

export default App;
