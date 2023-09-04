import { generateImage } from "./generateImage";

export const modifyImage = async (
  orderId: string,
  newPrompt: string,
  newStyle: string,
  newTheme: string
) => {
  const newImageData = await generateImage(newPrompt, newStyle, newTheme);

  // Firestoreに保存されている発注の画像データを更新
  // ...

  return newImageData;
};
