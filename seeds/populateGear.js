
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gear').del()
    .then(function () {
      // Inserts seed entries
      return knex('gear').insert([
        {
          id: 1,
          status: "Available",
          trustframework: "Three",
          name: 'Hammer Drill',
          description: 'Tackle a wide range of applications with quick-release chucks and multi-gear drills. Designed with large diameter gearing, optimised communtators and rugged casing to last longer.',
          photo_url: 'https://i.ebayimg.com/images/g/eJAAAOSw9mpaNb1N/s-l300.jpg',
          user_id: 1
        },
        {
          id: 2,
          status: "Not Available",
          trustframework: "Two",
          name: 'Food Dehydrator',
          description: 'Easily make healthy, delicious, and natural snacks like banana chips, fruit roll-ups, and jerky!',
          photo_url: 'https://cdn3.volusion.com/wunh2.w2vhv/v/vspfiles/photos/75-0601-W-2.jpg?1524575057',
          user_id: 2
        },
        {
          id: 3,
          status: "Available",
          trustframework: "Three",
          name: 'Chainsaw',
          description: 'Entry level MiniBoss™ Chainsaw for cutting firewood economical, compact and lightweight. STIHL Ematic chain lubrication for optimum lubrication of the chain.',
          photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Stihl_MS_170.JPG/1200px-Stihl_MS_170.JPG',
          user_id: 3
        },
        {
          id: 4,
          status: "Not Available",
          trustframework: "One",
          name: 'Hole Saw Set',
          description: 'Bi-metal holesaws with high speed steel teeth for cutting mild steel, copper, aluminium, brass, laminates, plastics and timber. Carbon steel arbor and extension.',
          photo_url: 'http://img.diytrade.com/cdimg/456086/2606764/0/1155628706.jpg',
          user_id: 4
        },
        {
          id: 5,
          status: "Available",
          trustframework: "Two",
          name: 'Water Blaster',
          description: 'Compact, light weight Waterblaster, great for light cleaning jobs around the house and garden. The RE 88 comes equipped with an anti-drill and quick release coupling on the gun, rotary and fan nozzles and a detergent spray set, all as standard.ary and fan nozzles and detergent spray set, all as standard.',
          photo_url: 'http://hireshopkaitaia.co.nz/wp-content/uploads/2014/10/waterblaster-1800psi.jpg',
          user_id: 1
        },
        {
          id: 6,
          status: "Not Available",
          trustframework: "One",
          name: 'Cuisinart Ice Cream Maker',
          description: 'Thanks to the simple, fast operation of this homemade ice cream maker, there’s no quicker, easier way to cool down after a hot summer day.',
          photo_url: 'https://www.williams-sonoma.com/wsimgs/rk/images/dp/wcm/201824/0101/cuisinart-ice-cream-maker-with-extra-freezer-bowl-c.jpg',
          user_id: 2
        },
        {
          id: 7,
          status: "Available",
          trustframework: "One",
          name: 'Hair Clippers',
          description: 'The Wahl Super Taper is one of the most popular mains clippers among NZ professionals, barbers and salons. Its powerful, realiable motor, durable, corrosion resistant chrome plated blades make it ideal for all clipper work.',
          photo_url: 'https://images.asos-media.com/products/wahl-lithium-power-spl-clipper/8103968-1-multi?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72',
          user_id: 3
        },
        {
          id: 8,
          status: "Not Available",
          trustframework: "One",
          name: 'Dog Shower Tool Kit',
          description: 'Wash every part of your dog quickly and easily with this 360 Degree Adjustable Dog Cleaner featuring an arc-shaped hose extension with 30 powerful water jets and a refillable shampoo container.',
          photo_url: 'https://cdn.shopify.com/s/files/1/1371/9935/products/Pet-Dog-Cat-Bathing-Cleaner-360-Degree-Shower-Tool-Kit-Dog-Cleaning-Washing-Bath-Sprayers-Pet_1200x.jpg?v=1514815391',
          user_id: 4
        },
        {
          id: 9,
          status: "Available",
          trustframework: "Three",
          name: 'Rotary Hoe',
          description: 'The Red Roo rotary hoe has a 600mm wide cutting deck that goes to a depth of 250mm. This unit is powered by a 8.5hp petrol engine, and is easily transported by ute or trailer.',
          photo_url: 'https://www.directaccessandequipment.com.au/assets/equipment/general/rotary-hoe.jpg',
          user_id: 1
        },
        {
          id: 10,
          status: "Not Available",
          trustframework: "One",
          name: 'Travel Hair Dryer',
          description: 'The hair dryer has 1400W power and has 2 different speed settings, it also comes with a clip off concentrator for easier styling.',
          photo_url: 'http://www.gapyeartravelstore.com/images/P/2-15.jpg',
          user_id: 2
        },
        {
          id: 11,
          status: "Available",
          trustframework: "Two",
          name: 'Acoustic Guitar',
          description: 'Rouge guitars is for musicians, who are looking for an ambitious instrument with a good sound and a modern design.',
          photo_url: 'https://www.batonrougeguitars.com/fileadmin/images/home/Galeria_2018_04/Batonrouge_Guitars_04.jpg',
          user_id: 3
        },
        {
          id: 12,
          status: "Not Available",
          trustframework: "Two",
          name: 'Fishing Kayak',
          description: 'Fishing Kayak set up includes paddle, anchor, seat, and storage /rod holder. Great fishing set up.',
          photo_url: 'https://i.ebayimg.com/00/s/MTA2N1gxNjAw/z/kNAAAOSwve5bVayv/$_75.JPG',
          user_id: 3
        },
      ]);
    });
};
