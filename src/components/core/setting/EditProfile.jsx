import React, { useState } from "react";
import { updateProfile } from "../../../services/operations/profileAPI";
import { useDispatch, useSelector } from "react-redux";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    contactNo: "",
    about: "",
    gender: "",
  });
  const {token} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
    dispatch(updateProfile(token, formData))
    setFormData({
      dateOfBirth: "",
      contactNo: "",
      about: "",
      gender: "",
    })
  };

  return (
    <div className="min-h-screen col-span-9 flex items-center justify-center bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-6 rounded-lg shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>

        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactNo" className="block text-sm font-medium mb-2">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="e.g., 123-456-7890"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium mb-2">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="about" className="block text-sm font-medium mb-2">
            About
          </label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="Tell us a little about yourself"
            rows="4"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
