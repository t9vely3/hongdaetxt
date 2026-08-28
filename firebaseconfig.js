/* ══════════════════════════════════════════════════════════════
   사내문고 설정 파일
   이 파일 하나만 채우면 됩니다. index.html 을 새 버전으로 갈아 끼워도
   이 파일은 건드려지지 않으니 설정이 날아가지 않습니다.

   값 얻는 곳 : Firebase 콘솔 → 프로젝트 설정(톱니) → 내 앱 → 웹 앱 → SDK 설정
   ══════════════════════════════════════════════════════════════ */

window.FIREBASE_CONFIG = {
apiKey: "AIzaSyBCGs8MWo5Bw8FDf5up9x5dmvN2_SWqXO4",
  authDomain: "hongdaetxt.firebaseapp.com",
  projectId: "hongdaetxt",
  storageBucket: "hongdaetxt.firebasestorage.app",
  messagingSenderId: "1061365979954",
  appId: "1:1061365979954:web:013994478cd0849616552b"
};

// 작가를 임명하는 관리자 계정 (보안 규칙에 적은 이메일과 같아야 합니다)
window.ADMIN_EMAIL = "t9vely@naver.com";

// 구글 로그인 버튼도 함께 띄우려면 true
window.ENABLE_GOOGLE_LOGIN = false;
