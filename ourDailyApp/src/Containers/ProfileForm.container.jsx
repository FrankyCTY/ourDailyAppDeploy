import React from "react";
import PixelSpinner from "../Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";
import {Formik, UploadAvatar, Notification} from "../Components/Compound Components";
import {UploadAvatarProvider} from "../context/uploadAvatar.context";
import {useSelector} from "react-redux";
// import {useFormik} from "formik";
import _arrayBufferToBase64 from "../utils/bufferArrayToBase64";
import useProfileForm from "../hooks/useProfileForm.hooks";

const ProfileFormContainer = () => {
    const isUploadingUserDetails = useSelector(state => state.user.isUpdatingUserDetails);
    const { profileDetails, handleInputChange, handleDateChange, userAvatar, isDOBvalid } = useProfileForm();
    const {name, email, birthday, bio, gender, personalWebsite} = profileDetails;

    return <UploadAvatarProvider>
        <Formik className="md:grid md:grid-cols-2 md:grid-gap md:gap-x-8">
                <Formik.AvatarContainer src={`data:image/jpg;base64,${_arrayBufferToBase64(userAvatar)}`} 
                className="mx-auto md:col-span-2 md:mb-12"/>

                {/* Name */}
                <Formik.Group>
                    <Formik.Label htmlFor="name">Name</Formik.Label>
                    <Formik.Group>
                        <Formik.Input disabled={isUploadingUserDetails} value={name} onChange={handleInputChange} className="w-full" type="text" id="name" name="name"></Formik.Input>
                    </Formik.Group>
                </Formik.Group>

                {/* Email */}
                <Formik.Group>
                    <Formik.Label htmlFor="email">E-mail</Formik.Label>
                    <Formik.Group>
                        <Formik.Input disabled={isUploadingUserDetails} value={email} onChange={handleInputChange} className="w-full" type="text" id="email" name="email"></Formik.Input>
                    </Formik.Group>
                </Formik.Group>



            {/* Bio textarea!! */}
            <Formik.Group className="md:col-span-2">
                <Formik.Label htmlFor="bio">Bio</Formik.Label>
                <Formik.Group>
                    <Formik.Textarea disabled={isUploadingUserDetails} value={bio} onChange={handleInputChange} rows="4" placeholder="e.g., Independent software developer focused on clean and elegant web designs. Avid reader. Active writer. Enthusiastic traveler." className="w-full" type="text" id="bio" name="bio"></Formik.Textarea>
                </Formik.Group>
            </Formik.Group>

            {/* Personal Website */}

            <Formik.Group>
                <Formik.Label htmlFor="website">Personal Website</Formik.Label>
                <Formik.Group>
                    <Formik.Input disabled={isUploadingUserDetails} value={personalWebsite} onChange={handleInputChange} className="w-full" type="text" id="personalWebsite" name="personalWebsite"></Formik.Input>
                </Formik.Group>
            </Formik.Group>

            {/* Gender dropdown */}
            <Formik.Group>
                <Formik.Label htmlFor="gender">Gender</Formik.Label>
                <Formik.Group>
                    <Formik.Select disabled={isUploadingUserDetails} value={gender} onChange={handleInputChange} className="w-full" name="gender" id="gender">
                        <option disabled value="Please Select">Please select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="unspecified">unspecified</option>
                    </Formik.Select>
                </Formik.Group>
            </Formik.Group>
            {/* Birthday Date Picker */}
            <Formik.Group>
                <Formik.Label htmlFor="birthday">Birthday (Month/Day/Year)</Formik.Label>
                <Formik.Group>
                {/* selected={parse(birthday, 'dd/MM/yyyy', new Date())}  className="frankyda111" */}
                    <Formik.DatePicker disabled={isUploadingUserDetails} onChange={handleDateChange} selected={new Date(birthday)}  className="frankyda111"></Formik.DatePicker>
                </Formik.Group>
            </Formik.Group>
            <Formik.SubmitBtn disabled={isUploadingUserDetails || !isDOBvalid} operationType="changeProfile" type="submit" variant="contained" color="primary" 
            formDetails={profileDetails} className="col-span-2 justify-self-start mt-5">Save{isUploadingUserDetails && <PixelSpinner size={1.2} animationDuration={1500} style={{marginLeft: "4px"}}/>}</Formik.SubmitBtn>
        </Formik>
        <UploadAvatar.CropImageContainer/>
        <Notification className={`${!isDOBvalid && "show"}`} type="error" >Please check your birthday year.</Notification>
        </UploadAvatarProvider>
        
}

export default ProfileFormContainer;