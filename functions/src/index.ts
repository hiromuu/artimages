import * as functions from "firebase-functions";
import { createOrder } from "./orders/createOrder";
import { getUserInfo } from "./users/getUserInfo";
import { getStylesAndThemes } from "./stylesAndThemes/getStylesAndThemes";
import * as admin from "firebase-admin";

admin.initializeApp(); // ここで初期化

exports.createOrder = functions.https.onCall(createOrder);
exports.getUserInfo = functions.https.onCall(getUserInfo);
exports.getStylesAndThemes = functions.https.onCall(getStylesAndThemes);
