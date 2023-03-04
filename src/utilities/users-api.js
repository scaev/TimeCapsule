import sendRequest from "./send-request";
const BASE_URL = "/api/users";

// export async function signUp(userData) {
//   const res = await fetch(BASE_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     // JS object to the JSON object
//     body: JSON.stringify(userData),
//   });
//   if (res.ok) {
//     return res.json();
//   } else {
//     // because of the catch in the signup Component
//     // we are sending this error to the catch
//     throw new Error("Invalid Sign Up");
//   }
// }

// export async function login(userData) {
//   const res = await fetch(`${ BASE_URL }/login` , {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(userData),
//   });
//   if (res.ok) {
//     return res.json();
//   } else {
//     throw new Error("Invalid Login");
//   }
// }

export async function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export async function login(userData) {
  return sendRequest(`${BASE_URL}/login`, "POST", userData);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
