import toast from "react-hot-toast";
import { settingsEndpoints } from "../api";
import { apiConnector } from "../apiConnnector";
import { setLoading } from "../../features/authSlice";
import { setUser } from "../../features/profileSlice";

export const updateProfile = (token, data) => {
  const { dateOfBirth, contactNo, gender, about } = data;
  return async (dispatch) => {
    const toastId = toast.loading("loading...");
    dispatch(setLoading(true));
    try {
      const res = await apiConnector(
        "PUT",
        settingsEndpoints.UPDATE_PROFILE_API,
        {
          dateOfBirth,
          contactNo,
          gender,
          about,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      )
      console.log(res);
      dispatch(setUser(res.data.updatedUserDetails))
    } catch (err) {
      console.log(err);
      toast.error("Could not Update the details");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};
