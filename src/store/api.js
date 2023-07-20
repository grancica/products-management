// const FIREBASE_DOMAIN = "https://react-prep-default-rtdb.firebaseio.com";

// export async function getAllQuotes() {
//   const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not fetch quotes.");
//   }

//   const transformedQuotes = [];

//   for (const key in data) {
//     const quoteObj = {
//       id: key,
//       ...data[key],
//     };

//     transformedQuotes.push(quoteObj);
//   }

//   return transformedQuotes;
// }

export async function getSingleProduct(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch product.");
  }
  const loadedProduct = {
    id: id,
    ...data,
  };

  return loadedProduct;
}

export async function addProduct(productData) {
  console.log(productData);

  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    body: JSON.stringify(productData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add product.");
  }
}

// export async function addComment(requestData) {
//   const response = await fetch(
//     `${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`,
//     {
//       method: "POST",
//       body: JSON.stringify(requestData.commentData),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not add comment.");
//   }

//   return { commentId: data.name };
// }

// export async function getAllComments(quoteId) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not get comments.");
//   }

//   const transformedComments = [];

//   for (const key in data) {
//     const commentObj = {
//       id: key,
//       ...data[key],
//     };

//     transformedComments.push(commentObj);
//   }

//   return transformedComments;
// }
