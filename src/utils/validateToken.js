import { setStatus, setError, userLogin } from "../slices/userSlice";
import { fetchWrapper } from "./fetchWarpper";

export const validateToken = () => async (dispatch) => {
  dispatch(setStatus("loading"));

  try {
    const data = await fetchWrapper(
      `${process.env.SERVER_URL}/auth/validate-token`,
    );
    dispatch(userLogin(data.user.username));
    dispatch(setStatus("succeeded"));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setStatus("failed"));
  }
};
