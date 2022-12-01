import { useEffect, useState } from "react";
import { getProfile } from "../../api/Api";
import { IProfile } from "../../interfaces/api/IProfile";
import Header from "../../components/profile/header/ProfileHeader";
import ProfileContent from "../../components/profile/content/ProfileContent";

const Profile = () => {
  const [data, setData] = useState<IProfile | undefined>(undefined);
  let [allData, setAllData] = useState<IProfile[]>([]);
  let [counter, setCounter] = useState<number>(1);

  const handleNextProfiles = (num: number) => {
    setCounter(num);
    getProfile(num).then((res) => {
      setData(res);
      setAllData([...allData, res]);
    });
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
