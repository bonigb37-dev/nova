import "./globals.css";

export const metadata = {
  title: "Maison Savana — Cuisine d’Afrique & d’ailleurs",
  description: "Une table généreuse où les saveurs africaines rencontrent une cuisine contemporaine. Réservez votre expérience chez Maison Savana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
