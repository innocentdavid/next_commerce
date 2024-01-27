"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import Header from "components/header";
import { usePathname } from "next/navigation";

const Providers = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <Provider store={store}>
      <div className="app-main">
        <Header />
        <main className={pathname !== "/" ? "main-page" : ""}>{children}</main>
      </div>
    </Provider>
  );
};

export default Providers;
