import "./globals.css";

export const metadata = {
  title: "Nova-Retau — Grillades, cuisine & convivialité",
  description: "Poissons braisés, poulet bicyclette, pizzas, chawarmas, burgers et douceurs : découvrez la carte généreuse de Nova-Retau.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
