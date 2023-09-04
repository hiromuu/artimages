import { generateImage } from "./generateImage";
import * as admin from "firebase-admin";

const db = admin.firestore();

export const regenerateImage = async (
  orderId: string,
  prompt: string,
  style: string,
  theme: string
) => {
  const newImageData = await generateImage(prompt, style, theme);

  const orderRef = db.collection("orders").doc(orderId);
  await orderRef.update({
    imageData: newImageData,
  });

  return newImageData;
};
