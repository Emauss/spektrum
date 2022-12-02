import "./profileContent.scss";
import checked from "../../../assets/icons/checked.svg";
import { ProfileContentProps } from "../../../types/ProfileContentProps";
import Spinner from "../../features/spinner/Spinner";
import Image from "./image/Image";

const ProfileContent = ({ counter, data, handleNextProfiles }: ProfileContentProps) => {
  if (!data) return <Spinner />;

  return (
    <div className="profile container text-center">
      <div className="profile-content">
        <Image key={counter} />
        <div className="profile-content-desc">
          <div className="profile-content-desc-name row mt-4">
            <div className="col-lg-8">
              <h3>{data?.name}</h3>
            </div>
            <div className="col-lg-4 text-center">
              <img src={checked} alt="checked_img" />
            </div>
          </div>
          <div className="profile-content-desc-details">
            <p>age: {data?.birth_year}</p>
            <p>eye color: {data?.eye_color}</p>
          </div>
        </div>
      </div>
      <button className="profile-btn" onClick={() => handleNextProfiles(counter + 1)}>
        next profiles
      </button>
    </div>
  );
};

export default ProfileContent;
