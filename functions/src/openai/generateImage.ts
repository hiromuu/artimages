import * as functions from 'firebase-functions';
import axios from 'axios';

const OPENAI_ENDPOINT = "https://api.openai.com/v1/images:generate";
const API_KEY = functions.config().openai.key;

export const generateImage = async (prompt: string, style: string, theme: string) => {
    const headers = {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    };

    const requestBody = {
        prompt: `${style} ${theme} ${prompt}`,
        // 他のパラメータもここに追加できます
    };

    try {
        const response = await axios.post(OPENAI_ENDPOINT, requestBody, { headers: headers });
        return response.data; // 画像データを返す
    } catch (error) {
        console.error("Error generating image:", error);
        throw new Error("Failed to generate image.");
    }
};
