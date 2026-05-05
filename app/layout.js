import "./globals.css";

export const metadata = {
  title: "System Programmer | Portfolio",
  description: "Portfolio of a Systems Programmer showcasing kernels, compilers, and low-level engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
