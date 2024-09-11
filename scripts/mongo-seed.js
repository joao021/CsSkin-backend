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
        image:
          'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEmyVS7cYg3LuT94qm21GyqUpsa2j7IIDDJwI7YwvRrFi7lOa5hpfpvs_A1zI97fpmYHCU/360fx360f',
        category: 'rifle',
        float: '0.05',
        price: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'M4A1-S | Hyper Beast',
        image:
          'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yg5UJrNjrwd4SUcQZsZFnR_we3xr3t1pC-uZXMznM37nIr4imMlkOxiRlSLrs4LxeSr5E/360fx360f',
        category: 'rifle',
        float: '0.15',
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'AWP | Dragon Lore',
        image: 'https://p3d.in/model_data/snapshot/MUfMR',
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
