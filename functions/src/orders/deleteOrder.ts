import { db } from "./../index";

export const deleteOrder = async (orderId: string) => {
  const orderRef = db.collection("orders").doc(orderId);
  await orderRef.delete();
};
