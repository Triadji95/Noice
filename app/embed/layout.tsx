export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
