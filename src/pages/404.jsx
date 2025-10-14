import { useNavigate } from "react-router-dom";
import "../css/404.css";

function NotFound() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/", {replace: true});
  };
  return (
    <div className="NotFound-container">
      <h1>Roll credits… this page didn’t make the final edit.</h1>
      <button className="back-button" onClick={backToHome}>
        Back to home
      </button>
    </div>
  );
}
export default NotFound;
