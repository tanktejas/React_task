import react from "react";
import Joinform from "../joinform";
import Homenav from "../homenav.js";
import './loginsignin.css'
function Loginsign() {
  return (
    <>
      <Homenav />
      <div className="mainforlogin">
        <Joinform />
      </div>
    </>
  );
}

export default Loginsign;
