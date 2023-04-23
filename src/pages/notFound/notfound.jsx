import { Link } from "react-router-dom";
import "./notfound.css";

export default function NotFound() {
  return (
    <main id="notfound">
      <div>
        <h2>We've lost this page.</h2>
        <p>
          Sorry the page you are looking for doesnt exist or has been moved.
        </p>
        <Link to="/">Back to Home</Link>
      </div>
    </main>
  );
}
