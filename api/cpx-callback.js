// Datei: api/cpx-callback.js
export default async function handler(req, res) {
  const { user_id, reward_amount } = req.body;
  const coins = Math.round(reward_amount * 1000);

  // Hier würdest du z.B. die Coins in einer Datenbank speichern
  console.log(`User ${user_id} getting ${coins} Coins`);

  res.status(200).json({ message: `✅ ${coins} got Coins` });
}
