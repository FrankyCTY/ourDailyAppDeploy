import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { format } from 'date-fns';


export default function useProfileForm() {
 const user = useSelector(state => state.auth_P.user);
 const userAvatar = useSelector(state => state.auth_P.userAvatar);

  const [profileDetails, setProfileDetails] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
    personalWebsite: user.personalWebsite,
    gender: user.gender,
    birthday: format(new Date(user.birthday), 'dd/MM/yyyy'),
});

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setProfileDetails((prevProfileDetails) => ({
      ...prevProfileDetails,
      [name]: value,
    }));
  }, []);

  const handleDateChange = useCallback((date) => {
    setProfileDetails((prevProfileDetails) => ({
        ...prevProfileDetails,
        birthday: format(new Date(date), 'dd/MM/yyyy'),
      }))
  }, [])


  return {
    profileDetails,
    handleInputChange,
    handleDateChange,
    userAvatar,
  };
}
