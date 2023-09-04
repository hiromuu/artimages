import * as admin from "firebase-admin";
import { CallableContext } from "firebase-functions/v1/https";

const db = admin.firestore();

export const getUserInfo = async (
  data: Record<string, unknown>,
  context: CallableContext
) => {
  const userId = context.auth?.uid;
  if (!userId) {
    throw new Error("User is not authenticated.");
  }

  const userDoc = await db.collection("Users").doc(userId).get();
  if (!userDoc.exists) {
    throw new Error("User not found.");
  }

  return userDoc.data();
};
