
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
          status: "Available",
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
          description: 'Entry level MiniBoss Chainsaw for cutting firewood economical, compact and lightweight. STIHL Ematic chain lubrication for optimum lubrication of the chain.',
          photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Stihl_MS_170.JPG/1200px-Stihl_MS_170.JPG',
          user_id: 3
        },
        {
          id: 4,
          status: "Available",
          trustframework: "One",
          name: 'Hole Saw Set',
          description: 'Bi-metal holesaws with high speed steel teeth for cutting mild steel, copper, aluminium, brass, laminates, plastics and timber. Carbon steel arbor and extension.',
          photo_url: 'http://img.diytrade.com/cdimg/456086/2606764/0/1155628706.jpg',
          user_id: 4
        },
        {
          id: 5,
          status: "Not Available",
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
          status: "Not Available",
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
          status: "Not Available",
          trustframework: "Three",
          name: 'Rotary Hoe',
          description: 'The Red Roo rotary hoe has a 600mm wide cutting deck that goes to a depth of 250mm. This unit is powered by a 8.5hp petrol engine, and is easily transported by ute or trailer.',
          photo_url: 'https://www.directaccessandequipment.com.au/assets/equipment/general/rotary-hoe.jpg',
          user_id: 1
        },
        {
          id: 10,
          status: "Available",
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
          status: "Available",
          trustframework: "Two",
          name: 'Fishing Kayak',
          description: 'Fishing Kayak set up includes paddle, anchor, seat, and storage /rod holder. Great fishing set up.',
          photo_url: 'https://i.ebayimg.com/00/s/MTA2N1gxNjAw/z/kNAAAOSwve5bVayv/$_75.JPG',
          user_id: 3
        },
        {
          id: 13,
          status: "Available",
          trustframework: "One",
          name: 'Ladder',
          description: 'he Atom Multi Ladder 22 combines the strengths of traditional A-frame, uneven A-frame and extension ladders, and trestle scaffolding, into one tidy package.',
          photo_url: 'https://www.traderisk.com.au/wp-content/uploads/2015/08/ladder-double.jpg',
          user_id: 1
        },
        {
          id: 14,
          status: "Available",
          trustframework: "Three",
          name: 'Engine Hoist',
          description: 'Big Red 1 Ton Engine Hoist (T31002) by Torin®. The heavy-duty Torin 1 Ton Folding Shop Crane is specifically designed to raise, lower and transport engines, differentials, transmissions and other heavy loads with minimal effort.',
          photo_url: 'http://www.yesterdaystractors.com/gallery/jd2010art/onstand.jpg',
          user_id: 2
        },
        {
          id: 15,
          status: "Available",
          trustframework: "Two",
          name: 'Microwave',
          description: 'Class up your cooking space. This Samsung over-the-range microwave has a sleek design and LED display to keep your kitchen looking sharp.',
          photo_url: 'https://s7d2.scene7.com/is/image/SamsungUS/rsi-ctt-LifestyleCountertopMicrowave-1440-HAMicrowaves-063016V2?$feature-benefit-bottom-mobile-jpg$',
          user_id: 3
        },
        {
          id: 16,
          status: "Not Available",
          trustframework: "Three",
          name: 'Commercial Donut Machine',
          description: 'This machine can make 560 donuts/hour – that is more than 46 dozen/hour. Most often, this quantity of donuts is enough.',
          photo_url: 'http://www.otex.us/otexkepek/termek/12/12_1_orig.jpg',
          user_id: 4
        },
        {
          id: 17,
          status: "Available",
          trustframework: "Two",
          name: 'Golf Clubs',
          description: '7 Antique Vintage 1920s Hickory Wood Shaft Golf Clubs & Old Golf Bag.',
          photo_url: 'https://www.parthcnctools.com/image/parthcnctools/7-antique-vintage-1920s-hickory-wood-shaft-golf-clubs-old-golf-bag-1600-x-952.jpg',
          user_id: 1
        },
        {
          id: 18,
          status: "Not Available",
          trustframework: "Three",
          name: 'Row Boat',
          description: 'Great little boat, does not leak a drop. Does not come with oars',
          photo_url: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BXDkzMFFeizetursq/videoblocks-close-up-shot-of-an-old-row-boat-that-has-been-pulled-to-shore-the-river-can-be-seen-nearby-and-grass-growing-inside-the-boat_s-hgt0tctz_thumbnail-full01.png',
          user_id: 2
        },
        {
          id: 19,
          status: "Available",
          trustframework: "One",
          name: 'VHS Tape Rewinder',
          description: 'Quickly rewind your videotapes and video cassettes with a fast and easy VCR rewinder. Enjoy your old movies and home videos with these bestselling brands.',
          photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/VHS_tape_rewinder.jpg/1200px-VHS_tape_rewinder.jpg',
          user_id: 3
        },
        {
          id: 20,
          status: "Not Available",
          trustframework: "One",
          name: 'Fedora',
          description: 'Celebrate your next night on the town while wearing this timeless classic, a black felt fedora. The perfect hat for making a classy statement at any Guys and Dolls, Gangster and Moxies, or Blues Brothers parties.',
          photo_url: 'https://memestatic2.fjcdn.com/thumbnails/comments/You+made+me+do+this+go+fedora+stand+_c6ed43c4430c0410abf9ffb8fccf6abf.jpg',
          user_id: 4
        },
        {
          id: 21,
          status: "Available",
          trustframework: "Three",
          name: 'Penny Farthing',
          description: 'An interesting penny farthing high well bicycle having wood handles and stretched leather seat.',
          photo_url: 'https://www.unicycle.uk.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/u/custompennyfarthing.jpg',
          user_id: 1
        },
        {
          id: 22,
          status: "Not Available",
          trustframework: "One",
          name: 'Barrel Cactus',
          description: 'Echinocactus grusonii, popularly known as the golden barrel cactus, golden ball or mother-in-laws cushion, is a well known species of cactus, and is endemic to east-central Mexico.',
          photo_url: 'https://cdn.shopify.com/s/files/1/0968/5384/products/4e630b91-b8d0-59f9-b7fd-79b213d01d2d.jpg?v=1520488868',
          user_id: 2
        },
        {
          id: 23,
          status: "Available",
          trustframework: "Two",
          name: 'Fire Extinguisher',
          description: 'Discharge a fine powder that absorbs fuel molecules, depriving the fire of a fuel source.',
          photo_url: 'http://www.upnorthvoice.com/wp-content/uploads/2018/05/fire-extinguisher.jpg',
          user_id: 3
        },
        {
          id: 24,
          status: "Not Available",
          trustframework: "Three",
          name: 'Jukebox',
          description: 'This is an original 1970s  jukebox but it was gutted to make it lighter as it was used as a prop in a play.  It therefore  doesnt work. It is currently on wheels. Artwork and song lists made up for the show so not original.',
          photo_url: 'https://www.fiftiesstore.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/w/1/w1800-11-17-1_xxl.jpg',
          user_id: 4
        },
      ]);
    });
};
