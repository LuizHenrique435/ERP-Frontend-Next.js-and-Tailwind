import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "ERP System",
  description: "ERP Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-BR">

      <body>

        <ThemeProvider>

          {children}

        </ThemeProvider>

      </body>

    </html>
  );
}