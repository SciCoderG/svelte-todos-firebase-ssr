import * as functions from "firebase-functions";
import {initializeApp} from "firebase-admin/app";
import ssrServerServer from "../lib/ssrServer";

initializeApp();

const regionName = "europe-west1";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions
    .region(regionName)
    .https.onRequest((request, response) => {
      functions.logger.info("Hello logs!", {structuredData: true});
      response.send("Hello from Firebase!");
    });

// let ssrServerServer: (arg0: any, arg1: any) => any;
exports.ssrServer = functions
    .region(regionName)
    .https.onRequest(async (request, response) => {
      // if (!ssrServerServer) {
      //   functions.logger.info("Initialising SvelteKit SSR entry");
      //   // eslint-disable-next-line @typescript-eslint/no-var-requires
      //   ssrServerServer = require("./ssrServer/index").default;
      //   functions.logger.info("SvelteKit SSR entry initialised!");
      // }
      functions.logger.info("Requested resource: " + request.originalUrl);
      return ssrServerServer(request, response);
    });
