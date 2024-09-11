const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb://mongo:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('skinsdb');
    const itemsCollection = database.collection('Item');

    const items = [
      {
        name: 'AK-47 | Redline',
        image: 'https://example.com/ak47_redline.png',
        category: 'rifle',
        float: '0.05',
        price: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'M4A1-S | Hyper Beast',
        image: 'https://example.com/m4a1s_hyperbeast.png',
        category: 'rifle',
        float: '0.15',
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'AWP | Dragon Lore',
        image: 'https://example.com/awp_dragonlore.png',
        category: 'sniper',
        float: '0.03',
        price: 1500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const result = await itemsCollection.insertMany(items);

    console.log(`${result.insertedCount} itens inseridos com sucesso.`);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
