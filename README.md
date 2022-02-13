# AnonQs
**Platform to ask questions anonymously using passport.js for Twitter oAuth**

*Instructions on how to setup is below*

## Demo of the application
<img width="625" alt="image" src="https://user-images.githubusercontent.com/39646629/153728831-7a570867-8324-415e-85ff-5116669a6961.png">
<img width="658" alt="image" src="https://user-images.githubusercontent.com/39646629/153730117-3f18a7c1-56ee-4c75-bf86-54ea892ab25d.png">
<img width="373" alt="image" src="https://user-images.githubusercontent.com/39646629/153729048-582f45bf-a5d0-4aef-9713-de602c34a14e.png">

---

### How to setup
First clone this project

*FYI: project not completed*

Backend
1. `cd backend`
2. `npm install`
3. `npm i passport passport-twitter`
4. Add your secret keys to `keys` file
5. To run server: `nodemon` or `node app.js`

Frontend
1. `cd frontend`
2. `npm install`
3. To run client: `npm start`
4. Now go to ```http://localhost:3000/```

*Key file should look like:*
```js
module.exports.MONGODB_URI = "mongodb://localhost:27017/";
module.exports.COOKIE_NAME = "cookie-name";
module.exports.COOKIE_KEY = "cookie-key";
module.exports.TWITTER_CONSUMER_KEY = "gTrXXXXXXXXhbUXhNCpv7UX2q";
module.exports.TWITTER_CONSUMER_SECRET = "qDkZjQo0XXXXXXXXXXXXXXOCXuptL0GTYYSKXThY8DYc";
```
