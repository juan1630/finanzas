import { collection, getDocs } from "firebase/firestore/lite";
import { FireStoreDb } from "../firebase/config";
import Swal from "sweetalert2";

export const loadReports = async (uid = "") => {
  let docsData = [];

  if (!uid) throw new Error("UID not valid");

  try {
    const docRef = collection(FireStoreDb, `${uid}`);
    const docs = await getDocs(docRef);

    docs.forEach((doc) => docsData.push(doc.data()));

    return docsData;
  } catch (error) {
    console.log(error);
    Swal.fire("Error", "", "error");
  }
};


export const loadIngresos = async( uid = "" ) => {
  let docsIngresos = [];

  try {
    if (!uid) throw new Error("UID not valid");

    const docRef = collection(FireStoreDb, `${uid}/ingresos/ingreso/`);
    const docs = await getDocs(docRef);

    docs.forEach((doc) => {
      docsIngresos.push(doc.data());
    });

    return docsIngresos;

  } catch (error) {
    console.log(error);
  }
}