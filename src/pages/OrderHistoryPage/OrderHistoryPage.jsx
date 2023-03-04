import React from "react";
import { checkToken } from "../../utilities/users-service";
// import * as userServices from "../../utilities/users-service";

function OrderHistoryPage() {
  async function handleCheckToken() {
    //useServices.checkToken()
    try {
      const expDate = await checkToken();
      console.log(expDate);
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <div>OrderHistoryPage</div>
      <button onClick={handleCheckToken}>ClickMe</button>
    </>
  );
}

export default OrderHistoryPage;
