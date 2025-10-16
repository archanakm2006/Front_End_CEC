import React, { useState } from "react";
import ProfileCard from "../src/components/ProfileCard";
import List from "../src/components/List";
import Form from "../src/components/form";
import Table from "./components/Table";

function App() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Components Demo</h1>

      {/* Nav Tabs */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
        <button onClick={() => setActiveTab("list")}>List</button>
        <button onClick={() => setActiveTab("form")}>Form</button>
        <button onClick={() => setActiveTab("table")}>Table</button>

      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "profile" && <ProfileCard />}
        {activeTab === "list" && <List />}
        {activeTab === "form" && <Form />}
        {activeTab === "table" && <Table />}
      </div>
    </div>
  );
}

export default App;