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
      {
        name: 'Butterfly ★ | Case Hardened ',
        image:
          'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPj9P77VqWZU7Mxkh6fHpo6i3Qzj80BkamqgcdTEIwU5Y1qB-1Hskrjtg5W9vsuYzHYwsiQk-z-DyNikRIBz/360fx360f',
        category: 'knife',
        float: '0.01',
        price: 804742,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'AK-47 | Gold Arabesque',
        image:
          'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09u5mIS0luX1Mb7Ch35U18l4jeHVu4ij3lW38hVuMGnyddSSIAU5ZwyF8gS7w---1pK0upvImHRl6yZ04HvD30vgkWvtgYA/360fx360f',
        category: 'rifle',
        float: '0.01',
        price: 804742,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '★ Sport Gloves | Vice',
        image:
          'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eO0mJWOqOf9PbDum25V4dB8xLuUodml21Hg8hZtZ2ChI4PBIwY4M17VqVS9x-ft1pG_7Z_PwCRruSA8pSGKVMmunN8/360fx360f',
        category: 'rifle',
        float: '0.01',
        price: 804742,
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
