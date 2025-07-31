export default async function handler(req, res) {
  const { user_id, reward_amount } = req.body;
  const coins = reward_amount * 1000;

  // Beispiel: Coins in Datenbank speichern
  await db.collection('users').updateOne(
    { id: user_id },
    { $inc: { coins } }
  );

  res.status(200).json({ message: `✅ ${coins} Got Coins` });
}
