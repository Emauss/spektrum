import "./profileContent.scss";
import checked from "../../../assets/icons/checked.svg";
import { IProfile } from "../../../interfaces/api/IProfile";

type Props = {
  counter: number;
  data: IProfile | undefined;
  handleNextProfiles: (num: number) => void;
};

const ProfileContent = ({ counter, data, handleNextProfiles }: Props) => {
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="profile container text-center">
        <div className="profile-content">
          <div className="profile-content-img">
            <img src={`${process.env.REACT_APP_API_IMG_URL}`} alt="profile_image" key={counter} />
          </div>
          <div className="profile-content-desc">
            <div className="profile-content-desc-name row mt-4">
              <div className="col-lg-8">
                <h3>{data.name}</h3>
              </div>
              <div className="col-lg-4 text-center">
                <img src={checked} alt="checked_img" />
              </div>
            </div>
            <div className="profile-content-desc-details">
              <p>age: {data.birth_year}</p>
              <p>eye color: {data.eye_color}</p>
            </div>
          </div>
        </div>
        <button className="profile-btn" onClick={() => handleNextProfiles(++counter)}>
          next profiles
        </button>
      </div>
    </>
  );
};

export default ProfileContent;
