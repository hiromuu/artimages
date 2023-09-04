import * as functions from "firebase-functions";
import { createOrder } from "./orders/createOrder";
import { getUserInfo } from "./users/getUserInfo";
import { getStylesAndThemes } from "./stylesAndThemes/getStylesAndThemes";
import * as admin from "firebase-admin";

exports.createOrder = functions.https.onCall(createOrder);
exports.getUserInfo = functions.https.onCall(getUserInfo);
exports.getStylesAndThemes = functions.https.onCall(getStylesAndThemes);
export const db = admin.firestore();
