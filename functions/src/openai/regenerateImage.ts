import { generateImage } from "./generateImage";
import { db } from "./../index";

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
