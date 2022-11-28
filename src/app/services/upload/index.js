import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { toastError } from "../../../components/sharedComponents/toast";

export async function uploadLoadFIle(file) {
  
  const storage = getStorage();
  if (!file) {
    toastError("Vui lòng chọn hình ảnh!");
    return
  }
  
  const storageRef = ref(storage, `/img/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
   uploadTask.on(
    "state_changed",
    (snapshot) => {
      const percent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      console.log(percent);
    },
    (err) => console.log(err),
    
  );
  const url = await getDownloadURL(uploadTask.snapshot.ref);
  return url

}
