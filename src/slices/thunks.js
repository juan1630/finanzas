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
import { loadIngresos, loadReports } from "../helpers/loadReports";
import { caculateTotal } from "../helpers/calculates";
import { onAddIngresos } from "./ingresosSlice";

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
      dispatch(getIngresos());
    } catch (error) {
      console.log(error);
      Swal.fire("Hubo un error", "", "error");
      dispatch(onErrorReprtsMessage(error));
    }
  };
};

export const addNewIngreso = (formSalary) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    try {
      const newIngreso = doc(
        collection(FireStoreDb, `${uid}/ingresos/ingreso/`)
      );
      setDoc(newIngreso, formSalary);
      dispatch(getReports());
      Swal.fire("Registro correcto", "", "success");
    } catch (error) {
      Swal.fire("Hubo un error", "", "error");
      console.log(eror);
    }
  };
};

export const getReports = () => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;
      const resp = await loadReports(uid);
      const total = caculateTotal(resp);
      dispatch(onAddReports({totalReports: total, reports: resp }));
      dispatch(onAddIngresos());
    } catch (error) {
      console.log(error);
    }
  };
};

export const getIngresos = () => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;

      const resp = await loadIngresos(uid);
      const total = caculateTotal(resp);
      dispatch(onAddIngresos({total, ingresos: resp }));
    } catch (error) {
      Swal.fire("Error", error, "error");
    }
  };
};
