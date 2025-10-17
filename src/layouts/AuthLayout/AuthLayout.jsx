import React from "react";
// import react-router-dom
import { Link, Outlet } from "react-router-dom";
// import PATHS
import PATHS from "../../constants/paths";

export default function AuthLayout() {
  return (
    <div>
      <header className="border-2 border-gray-50">
        <Link to={PATHS.ROOT.INDEX}>홈</Link>
        <Link to={PATHS.AUTH.INDEX}>로그인</Link>
        <Link to={PATHS.AUTH.SIGNUP}>회원가입</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
