
import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    room: "",
    category: "Cleaning",
    description: "",
  });

  const [complaints, setComplaints] = useState([]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newComplaint = {
      ...form,
      id: Date.now(),
    };

    setComplaints([...complaints, newComplaint]);

    setForm({
      name: "",
      room: "",
      category: "Cleaning",
      description: "",
    });
  }

  return (
    <div className="container">
      <h1>Smart Hostel Complaint System</h1>
      <p className="subtitle">
        Submit your hostel complaints easily.
      </p>

      <section className="card">
        <h2>Submit a Complaint</h2>

        <form onSubmit={handleSubmit}>
          <label>Student Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter student name"
            required
          />

          <label>Room Number</label>
          <input
            name="room"
            value={form.room}
            onChange={handleChange}
            placeholder="Enter room number"
            required
          />

          <label>Complaint Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option>Cleaning</option>
            <option>Food</option>
            <option>Water Supply</option>
            <option>Electricity</option>
            <option>Wi-Fi</option>
            <option>Maintenance</option>
            <option>Other</option>
          </select>

          <label>Complaint Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe your complaint"
            rows="4"
            required
          />

          <button type="submit">
            Submit Complaint
          </button>
        </form>
      </section>

      <section className="card">
        <h2>Submitted Complaints</h2>
        <p>Total complaints: {complaints.length}</p>

        {complaints.length === 0 ? (
          <p>No complaints submitted yet.</p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Room</th>
                  <th>Category</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                {complaints.map((c) => (
                  <tr key={c.id}>
                    <td>{c.name}</td>
                    <td>{c.room}</td>
                    <td>{c.category}</td>
                    <td>{c.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
