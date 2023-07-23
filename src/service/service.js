import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY2mGb3xU6fGuxNV7IY-7UvVURTR974k0",
  authDomain: "costa-outfit.firebaseapp.com",
  projectId: "costa-outfit",
  storageBucket: "costa-outfit.appspot.com",
  messagingSenderId: "280657107111",
  appId: "1:280657107111:web:4d443728837d886bd96382",
  measurementId: "G-WPKQ7FDHK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
const storage = getStorage(app);

export async function getAllPhotoUrls() {
    try {
        console.log(storage)
      const fotosRef = ref(storage)
      const fotosList = await listAll(fotosRef);
      console.log(fotosList)
      const urlsPromises = fotosList.items.map((item) => getDownloadURL(item));
      const urls = await Promise.all(urlsPromises);
      console.log(urls)
      return urls;
    } catch (error) {
      // Tratar erros, se necessário
      console.error("Erro ao buscar URLs das fotos:", error);
      return [];
    }
  }
  