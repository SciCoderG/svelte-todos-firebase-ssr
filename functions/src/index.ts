import {logger, region} from "firebase-functions";
import {initializeApp} from "firebase-admin/app";
import ssrServerServer from "../lib/ssrServer/index.js";

initializeApp();

const regionName = "europe-west1";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = region(regionName).https.onRequest(
    (request, response) => {
      logger.info("Hello logs!", {structuredData: true});
      response.send("Hello from Firebase!");
    }
);

export const ssrServer = region(regionName).https.onRequest(
    async (request, response) => {
      logger.info("Requested resource: " + request.originalUrl);
      return ssrServerServer(request, response);
    }
);
