import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export async function uploadLoadFIle(file) {
  
  const storage = getStorage();
  if (!file) {
    alert("Please upload an image first!");
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
