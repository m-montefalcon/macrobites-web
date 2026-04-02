import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import ThemeRegistry from "./components/ThemeRegistry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeRegistry>{children} </ThemeRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
