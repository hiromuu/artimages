import { db } from "./../index";

export const getOrderDetails = async (orderId: string) => {
  const orderRef = db.collection("orders").doc(orderId);
  const doc = await orderRef.get();

  if (!doc.exists) {
    throw new Error("Order not found");
  }

  return { id: doc.id, ...doc.data() };
};
