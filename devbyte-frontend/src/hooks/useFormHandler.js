import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  uploadProfilePicture,
  updateUserProfile,
  fetchUserProfile,
} from "@/redux/features/userSlice";

export const useFormHandler = (initialValues = {}, onSave) => {
  const [formData, setFormData] = useState(initialValues);
  const [selectedImage, setSelectedImage] = useState(null);

  const dispatch = useDispatch();

  // input change func
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // profile picture upload func
  const handleProfileUpdate = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        profile_picture: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  // form image func handler
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  // user profile submit handler
  const handleUserProfileSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(
        updateUserProfile({
          fullname: formData.fullname,
          email: formData.email,
          skills: formData.skills, 
        })
      ).unwrap();

      if (selectedImage) {
        await dispatch(uploadProfilePicture(selectedImage)).unwrap();
      }

      // Fetch fresh user
      await dispatch(fetchUserProfile());

      onSave();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    handleImageChange,
    handleUserProfileSubmit,
    handleProfileUpdate,
  };
};
