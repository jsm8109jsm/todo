"use client";

import "./globals.css";
import { FormProvider, useForm } from "react-hook-form";
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const methods = useForm();
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <FormProvider {...methods}>{children}</FormProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
