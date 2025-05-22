export async function fetchNoiceCount(): Promise<number> {
  // Contoh: return angka random sebagai placeholder
  const today = new Date().toISOString().split('T')[0];

  // Simulasi fetch data cast yang berisi "noice"
  const simulatedCount = Math.floor(Math.random() * 100); // Ganti dengan fetch asli jika Neynar tersedia
  console.log(`[fetchNoiceCount] ${today} → ${simulatedCount}`);
  return simulatedCount;
}
