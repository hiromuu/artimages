import { generateImage } from "../openai/generateImage";
import * as admin from "firebase-admin";

const db = admin.firestore();

// dataとcontextの型を定義
interface Data {
  prompt: string;
  style: string;
  theme: string;
  imageData: any;
  priceRange: string;
  size: string;
  frame: string;
  printingMethod: string;
}

interface Context {
  auth?: {
    uid: string;
  };
}

export const createOrder = async (data: Data, context: Context) => {
  const generatedImageData = await generateImage(
    data.prompt,
    data.style,
    data.theme
  );
  const orderData = {
    userId: context.auth?.uid,
    prompt: data.prompt,
    imageData: data.imageData,
    priceRange: data.priceRange,
    style: data.style,
    theme: data.theme,
    size: data.size,
    frame: data.frame,
    printingMethod: data.printingMethod,
    orderDate: admin.firestore.Timestamp.now(),
    status: "Pending",
  };

  // orderRefの定義を修正
  const orderRef = await db.collection("Orders").add(orderData);
  return { orderId: orderRef.id, imageData: generatedImageData };
};
