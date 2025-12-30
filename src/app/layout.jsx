import "./globals.css";

export const metadata = {
  title: "School Portal",
  description: "A portal for managing school activities and resources.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
