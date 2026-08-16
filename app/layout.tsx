import type { Metadata } from "next";
import "./globals.css";
import "./mobile-fixes.css";

export const metadata: Metadata = {
  title: "Garten- & Landschaftsbau in Norderstedt | Arslan Garten-Löwe",
  description: "Gartenpflege, Umgestaltung, Terrassen, Pflaster und Sichtschutz in Norderstedt und Hamburg-Nord. Jetzt persönliches Angebot anfragen.",
  metadataBase: new URL("https://rem0ulade.github.io/arslan-gartenloewe/"),
  openGraph: { title: "Arslan Garten-Löwe", description: "Gartenpflege & Gestaltung in Norderstedt und Hamburg-Nord", images: ["/arslan-gartenloewe/og.png"], locale: "de_DE", type: "website" },
  icons: { icon: "/arslan-gartenloewe/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
