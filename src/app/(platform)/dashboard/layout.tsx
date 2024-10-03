import React from "react";
import Header from "./_components/header/Header";
import NavBar from "./_components/NavBar";

function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard__layout bg-primary">
      <Header />
      <NavBar />
      <div className="outlet px-8 py-4 overflow-y-auto">{children}</div>
    </div>
  );
}

export default DashBoardLayout;
