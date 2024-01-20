export const config = {
    logoCount: 5,
    firebaseConfig: {
        apiKey: "AIzaSyDy1o-UQcjwzj2LHKaj5lwiOcU84L6nqg8",
        authDomain: "rk-singh-video-call.firebaseapp.com",
        projectId: "rk-singh-video-call",
        storageBucket: "rk-singh-video-call.appspot.com",
        messagingSenderId: "1078828061156",
        appId: "1:1078828061156:web:522c87ff1cd07b5ce837f1",
        measurementId: "G-JRQ0G2ZHGT"
    },
    servers: {
        iceServers: [
            {
            urls: ['stun:stun1.l.google.com:19302',
                   'stun:stun2.l.google.com:19302'],
            },
        ],
        iceCandidatePoolSize: 10,
    },
    DEV: "development" === 'development',
}
