import { Link } from "react-router-dom";
import "./profileHeader.scss";

const ProfileHeader = () => {
  return (
    <div className="d-flex justify-content-between header">
      <h3>Emanuel Okrój</h3>
      <Link className="register-link" to="/register">
        formularz rejestracyjny
      </Link>
    </div>
  );
};

export default ProfileHeader;
