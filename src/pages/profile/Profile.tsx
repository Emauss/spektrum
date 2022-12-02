import { useEffect, useState } from "react";
import { getImage, getProfile } from "../../api/Api";
import { IProfile } from "../../interfaces/api/IProfile";
import Header from "../../components/profile/header/ProfileHeader";
import ProfileContent from "../../components/profile/content/ProfileContent";
import { useGlobalContext } from "../../context/DataContext";

const Profile = () => {
  const [data, setData] = useState<IProfile | undefined>(undefined);
  const { allData, setAllData } = useGlobalContext();
  const [counter, setCounter] = useState<number>(1);

  const handleNextProfiles = (num: number) => {
    setCounter(num);
    getProfile(num).then((res) => {
      setData(res);
      const dataObj = { name: res.name, created: res.created, vehicles: res.vehicles };
      allData.length ? setAllData([...allData, dataObj]) : setAllData([dataObj]);
    });

    getImage();
  };

  useEffect(() => {
    handleNextProfiles(1);
  }, []);

  return (
    <>
      <Header />
      <ProfileContent counter={counter} data={data} handleNextProfiles={handleNextProfiles} />
    </>
  );
};

export default Profile;
