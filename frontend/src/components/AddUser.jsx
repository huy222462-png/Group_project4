import { useState } from "react";
import axios from "axios";

export default function AddUser({ onAddSuccess }) {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users", form);
      alert("Thêm user thành công!");
      setForm({ name: "", email: "" });
      onAddSuccess(); // Cập nhật lại danh sách
    } catch (error) {
      console.error("Lỗi khi thêm user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h3>Thêm người dùng mới</h3>
      <input
        type="text"
        name="name"
        placeholder="Tên"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Thêm</button>
    </form>
  );
}
