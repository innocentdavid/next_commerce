"use client";
import Head from 'next/head';
import Header from '../components/header';
import { usePathname } from 'next/navigation';
import React from 'react';
type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default ({ children, title = 'Next.js Ecommerce' }: LayoutType) => {

  // const pathname = router.pathname;
  const pathname = usePathname();

  return (
    <div className="app-main">
      <Head>
        <title>Page not found &mdash; { title }</title>
      </Head>

      <Header isErrorPage />

      <main className={(pathname !== '/' ? 'main-page' : '')}>
        { children }
      </main>
    </div>
  )
}