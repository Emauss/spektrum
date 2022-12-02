const Image = () => (
  <div className="profile-content-img">
    <img src={`${process.env.REACT_APP_API_IMG_URL}`} alt="profile_image" />
  </div>
);

export default Image;
