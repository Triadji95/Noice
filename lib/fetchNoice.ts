// lib/fetchNoice.ts

export async function fetchNoiceCount(): Promise<number> {
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  const query = new URLSearchParams({
    q: "noice",
    from: oneDayAgo,
    limit: "100",
  });

  const res = await fetch(`https://searchcaster.xyz/api/search?${query.toString()}`);
  if (!res.ok) return 0;

  const data = await res.json();

  // Filter hasil agar benar-benar hanya cast yang berisi 'noice' (case insensitive)
  const count = data.casts.filter((cast: any) =>
    cast.text.toLowerCase().includes("noice")
  ).length;

  return count;
}
