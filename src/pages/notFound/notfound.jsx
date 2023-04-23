import { Link } from "react-router-dom";
import "./notfound.css";
import svg from "../../assets/3828537.jpg";
export default function NotFound() {
  return (
    <main id="notfound">
      <div>
        <img src={svg} alt="notfound" />
        <h2>Page not found.</h2>
        <p>
          Sorry the page you are looking for doesnt exist or has been moved.
        </p>
        <Link to="/">Back to Home</Link>
      </div>
    </main>
  );
}
