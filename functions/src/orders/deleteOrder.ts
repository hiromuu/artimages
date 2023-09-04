import * as admin from "firebase-admin";

const db = admin.firestore();

export const deleteOrder = async (orderId: string) => {
  const orderRef = db.collection("orders").doc(orderId);
  await orderRef.delete();
};
