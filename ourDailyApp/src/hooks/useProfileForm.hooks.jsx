import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { format } from 'date-fns';


export default function useProfileForm() {
 const user = useSelector(state => state.auth_P.user);
 const userAvatar = useSelector(state => state.auth_P.userAvatar);

 const [isDOBvalid, setIsDOBvalid] = useState(true);

  const [profileDetails, setProfileDetails] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
    personalWebsite: user.personalWebsite,
    gender: user.gender,
    // birthday: format(new Date(user.birthday), 'dd/MM/yyyy'),
    birthday: format(new Date(user.birthday), 'MM/dd/yyyy'),
});

  const birthdayValidator = (birthday) => {
    if(birthday === null) {
      return;
    }
    const inputBirthdayYear = birthday.getFullYear();
    console.log(inputBirthdayYear > new Date().getFullYear());

    // Check if input birthday is bigger than current year
    if((inputBirthdayYear > new Date().getFullYear()) || ((new Date().getFullYear() - inputBirthdayYear) > 120)) {
      return setIsDOBvalid(false);
    }

    setIsDOBvalid(true);
  }

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setProfileDetails((prevProfileDetails) => ({
      ...prevProfileDetails,
      [name]: value,
    }));
  }, []);

  const handleDateChange = useCallback((date) => {
    birthdayValidator(date);
    if(isDOBvalid) {
      setProfileDetails((prevProfileDetails) => ({
          ...prevProfileDetails,
          // birthday: format(new Date(date), 'dd/MM/yyyy'),
          birthday: format(new Date(date), 'MM/dd/yyyy'),
        }))
    }
  }, [])


  return {
    profileDetails,
    handleInputChange,
    handleDateChange,
    userAvatar,
    birthdayValidator,
    isDOBvalid,
  };
}
