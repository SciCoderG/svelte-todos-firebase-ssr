import {logger, region} from "firebase-functions";
import {initializeApp} from "firebase-admin/app";

initializeApp();

const regionName = "europe-west1";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = region(regionName).https.
    onRequest((request, response) => {
      logger.info("Hello logs!", {structuredData: true});
      response.send("Hello from Firebase!");
    });
