import React from "react";
import { checkToken } from "../../utilities/users-service";
// import * as userServices from "../../utilities/users-service";

function PostHistoryPage() {
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
      <div>PostHistoryPage</div>
      <button onClick={handleCheckToken}>ClickMe</button>
    </>
  );
}

export default PostHistoryPage;
