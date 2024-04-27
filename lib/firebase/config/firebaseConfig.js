const firebaseConfig = {
	apiKey: "AIzaSyCBClM_nRyQeqcHrbkMDeWk4JKxuL03F9E", //hardcoded key, kept recieving fatal errors otherwise
	authDomain: process.env.AUTH_DOMAIN,
	databaseURL: "https://to-do-list-ee644-default-rtdb.firebaseio.com", //hardcoded url, kept recieving fatal errors otherwise
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,

};

export { firebaseConfig };
