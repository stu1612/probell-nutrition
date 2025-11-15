export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="mx-auto max-w-3xl p-6">{children}</section>;
}
