//los thunks son acciones asyncronas
import { signInWithGoogle } from "../providers/providers";
import { onLoggin, onChecking, onLoggout } from "./auhtSlice";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FireStoreDb } from "../firebase/config";
import {
  onCreatedReport,
  onErrorReprtsMessage,
  onLoadingReports,
  onAddReports,
} from "./reportsSlice";

import Swal from "sweetalert2";
import { loadReports } from "../helpers/loadReports";

export const googleSignIn = () => {
  return async (dispatch) => {
    dispatch(onChecking());
    const resp = await signInWithGoogle();
    if (!resp.ok) return dispatch(onLoggout(resp.errorMessage));
    delete resp.ok;
    localStorage.setItem("user", JSON.stringify(resp));
    localStorage.setItem("token", resp.token);
    dispatch(onLoggin(resp));
  };
};

export const addNewReport = (modalFormData) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    try {
      dispatch(onLoadingReports());
      const newDoc = doc(collection(FireStoreDb, `${uid}`));
      await setDoc(newDoc, modalFormData);
      dispatch(onCreatedReport(modalFormData));
      Swal.fire("Registro correcto", "", "success");
      dispatch(getReports());
    } catch (error) {
      console.log(error);
      dispatch(onErrorReprtsMessage(error));
    }
  };
};

export const getReports = () => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;
      const resp = await loadReports(uid);
      dispatch(onAddReports(resp));
    } catch (error) {
      console.log(error);
    }
  };
};
