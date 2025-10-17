import React from "react";
// import react-router-dom
import { NavLink, Outlet, useLocation } from "react-router-dom";
// import PATHS
import PATHS from "../../constants/paths";
// import css
import "./RootLayout.css";

export default function RootLayout() {
  const location = useLocation();
  return (
    <div>
      <header className="nav">
        <div className="nav-inner">
          <div className="nav-left"></div> {/* 왼쪽 빈공간 */}
          <div className="nav-center">
            <NavLink
              to={PATHS.ROOT.INDEX}
              className={({ isActive }) =>
                `nav-pill ${isActive ? "active" : ""}`
              }
              end
            >
              <span>　홈　</span>
            </NavLink>
            <NavLink
              to={PATHS.ROOT.CHAT}
              className={({ isActive }) =>
                `nav-pill ${isActive ? "active" : ""}`
              }
            >
              <span>메모 생성</span>
            </NavLink>
            <NavLink
              to={PATHS.ROOT.NOTE}
              className={({ isActive }) =>
                `nav-pill ${isActive ? "active" : ""}`
              }
            >
              <span>메모 목록</span>
            </NavLink>
          </div>
          <div className="nav-right">
            {location.pathname === PATHS.AUTH.INDEX ? (
              <NavLink to={PATHS.AUTH.SIGNUP} className="nav-pill">
                <span>회원가입</span>
              </NavLink>
            ) : (
              <NavLink to={PATHS.AUTH.INDEX} className="nav-pill">
                <span>로그인</span>
              </NavLink>
            )}
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
