import { Navigate, useNavigate } from "react-router";
import "../css/404.css";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="Error-container">
      <h1>Roll the Credits: Scene Not Found!</h1>
      <button onClick={() => navigate("/")}>Back to home</button>
    </div>
  );
}
export default NotFound;
