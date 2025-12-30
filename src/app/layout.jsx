import "./globals.css";
import BootstrapClient from "@/components/bootstrap/BootstrapClient";

export const metadata = {
  title: "School Portal",
  description: "A portal for managing school activities and resources.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
