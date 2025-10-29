import { useEffect, useState } from "react";
import axios from "axios";
import AddUser from "./AddUser";

export default function UserList() {
  const [users, setUsers] = useState([]);

  // Hàm lấy danh sách user
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map((u) => (
          <li key={u._id || u.id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>

      <AddUser onAddSuccess={fetchUsers} />
    </div>
  );
}
