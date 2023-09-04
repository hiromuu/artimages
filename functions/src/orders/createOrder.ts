import * as admin from 'firebase-admin';

const db = admin.firestore();

export const createOrder = async (data, context) => {
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
        status: "Pending"
    };

    const orderRef = await db.collection('Orders').add(orderData);
    return { orderId: orderRef.id };
};
