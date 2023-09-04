import * as admin from "firebase-admin";

const db = admin.firestore();

// Order型を定義
interface Order {
  id: string;
  userId: string;
  prompt: string;
  imageData: any;
  priceRange: string;
  style: string;
  theme: string;
  size: string;
  frame: string;
  printingMethod: string;
  orderDate: admin.firestore.Timestamp;
  status: string;
  // 必要に応じて他のフィールドを追加
}

export const getOrders = async (userId: string) => {
  const ordersRef = db.collection("orders");
  const snapshot = await ordersRef.where("userId", "==", userId).get();

  const orders: Order[] = []; // orders変数の型を明示的に指定
  snapshot.forEach((doc) => {
    orders.push({ id: doc.id, ...doc.data() } as Order); // doc.data()の結果をOrder型としてキャスト
  });

  return orders;
};
