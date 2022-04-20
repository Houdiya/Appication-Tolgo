import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "./../../configs/firebase";

let instance: any = null;

class FirebaseService {
  app: any;

  constructor() {
    if (!instance) {
      this.app = initializeApp(firebaseConfig, "Tôlgo");
      instance = this;
    }
    return instance;
  }
}

export default new FirebaseService().app;
