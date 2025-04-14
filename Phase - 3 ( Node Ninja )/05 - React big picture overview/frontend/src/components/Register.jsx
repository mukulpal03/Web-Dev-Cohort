import { useState } from "react";
import apiClient from "../../service/apiClient";
import { useNavigate } from "react-router";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await apiClient.signUp(name, email, password);

      console.log(data);

      if (data.success) {
        navigate("/login");
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div>
        <h1>Welcome to register page</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="text"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Signup..." : "Signup"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
