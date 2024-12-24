// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
const firebaseConfig = {
  apiKey: "AIzaSyD8iq6327ovmJVKQflD2E9mzLQElg18kYg",
  authDomain: "teampage-2code.firebaseapp.com",
  projectId: "teampage-2code",
  storageBucket: "teampage-2code.firebasestorage.app",
  messagingSenderId: "495445103559",
  appId: "1:495445103559:web:044d367cdc06ec94b2ffe2",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
