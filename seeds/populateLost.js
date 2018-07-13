
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lost').del()
    .then(function () {
      // Inserts seed entries
      // Dog Cat Fish Rat Rock
      return knex('lost').insert([
        {
          id: 1,
          name: 'Pouya',
          species: 'Rat',
          photo: 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2013/juigjhfj.jpg',
          user_id: 2
        },
        {
          id: 2,
          name: 'GZA',
          species: 'Rat',
          photo: 'https://vignette.wikia.nocookie.net/poohadventures/images/6/64/Rufus_%28Kim_Possible%29.jpeg/revision/latest?cb=20140708203220',
          user_id: 1
        },
        {
          id: 3,
          name: 'Ice Cube',
          species: 'Dog',
          photo: 'https://media.jumiadeals.com/ng_live/2c5421174c5ada2083a3b25.desktop-gallery-large.jpg',
          user_id: 3
        },
        {
          id: 4,
          name: 'Lil Peep',
          species: 'Cat',
          photo: 'https://data.whicdn.com/images/308357995/large.png',
          user_id: 2
        },
        {
          id: 5,
          name: 'Hot Tuna',
          species: 'Fish',
          photo: 'http://agoras24.com/wp-content/uploads/2018/03/tuna.jpg',
          user_id: 3
        },
        {
          id: 6,
          name: 'Denzel Curry',
          species: 'Dog',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Max_at_the_river2.jpg/220px-Max_at_the_river2.jpg',
          user_id: 2
        },
        {
          id: 7,
          name: '6ix9ine',
          species: 'Cat',
          photo: 'https://cdn.shopify.com/s/files/1/2526/4348/products/product-image-102128320_580x.jpg?v=1519190090',
          user_id: 3
        },
        {
          id: 8,
          name: 'Slug Christ',
          species: 'Cat',
          photo: 'https://i.ytimg.com/vi/z5eF_pIbqus/maxresdefault.jpg',
          user_id: 2
        },
        {
          id: 9,
          name: 'Scribe',
          species: 'Rock',
          photo: 'https://beafunmum.com/wp-content/uploads/2012/01/dreamstime_s_20093731.jpg',
          user_id: 1
        },
        {
          id: 10,
          name: 'XXXTentacion',
          species: 'Dog',
          photo: 'https://i.ytimg.com/vi/VNcBHABReF8/hqdefault.jpg',
          user_id: 2
        },
      ]);
    });
};
