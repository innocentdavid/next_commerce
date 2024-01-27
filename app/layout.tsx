import React from "react";
import { GA_TRACKING_ID } from "../utils/gtag";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/css';
import "rc-slider/assets/index.css";
import "react-rater/lib/react-rater.css";
import "../assets/css/styles.scss";
import { Metadata } from "next";
import Providers from "./providers";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Next.js E-commerce",
  description: "",
};

const layout = ({ children }: Props) => {
  return (
    <html>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default layout;
