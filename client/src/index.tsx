import React from "react";
import { createRoot } from "react-dom/client";
import { useGetIssuesReducer } from "./api/get-issues";

function App() {
  const { loading, error, issues } = useGetIssuesReducer();

  console.log({ issues });

  return (
    <div>
      <h1>Issues</h1>
      {!loading && !error && issues?.length > 0 && (
        <ul>
          {issues.map((issue) => {
            return (
              <li key={issue.id}>
                <h2>{issue.title}</h2>
                <p>{issue.description}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

window.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
});
