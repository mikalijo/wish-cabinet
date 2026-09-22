'use strict';

// ✦ EDIT YOUR WISHLIST HERE ✦
// Add, edit, or remove objects in this array. Give each gift a unique number.
// These are Mika’s chosen wishes. Some are general ideas with prices to be confirmed.
// Images can be local paths (assets/my-photo.jpg) or full https:// image URLs.
const wishlist = [
  {
    number: 1,
    name: 'Lush Sleepy Dust Dusting Powder',
    price: '$16.50',
    category: 'Cozy & Wellness',
    note: '1.9 oz · A little dream dust for cozy evenings.',
    image: 'https://www.lush.com/cdn-cgi/image/width%3D3840%2Cf%3Dauto/https%3A//unicorn.lush.com/media/thumbnails/products/1_sleepy_dust_dusting_powder_hero_2025_02_0da28a4e_thumbnail_4096.jpg',
    link: 'https://www.lush.com/us/en_us/p/sleepy-dust-dustingpowder'
  },
  {
    number: 2,
    name: 'Crunchy Butter Squishy',
    price: '$5.99',
    category: 'Little Things',
    note: 'A little crunchy, squishy delight.',
    image: 'https://m.media-amazon.com/images/I/61kzUt0yfGL._AC_SL1254_.jpg',
    link: 'https://www.amazon.com/dp/B0H9KBDTZQ?th=1'
  },
  {
    number: 3,
    name: 'Exchange Life Flag & Map Charms',
    price: '$15.00',
    category: 'Books & Curiosities',
    note: 'Interested in the bracelet or keychain option! You may need to remind me which states and countries I’ve visited. $15 per gold-plated charm; bracelet or keychain costs extra.',
    image: 'https://exchange-life.com/cdn/shop/files/Image1-WearYourStoryInFlagMapCharms.jpg?v=1783157423&width=600',
    link: 'https://exchange-life.com/products/country-charm-set'
  },
  {
    number: 4,
    name: 'Rosebud Trio Lip Balm Assortment, 0.5 Ounce',
    price: 'See Amazon for price',
    category: 'Beauty & Fragrance',
    note: 'I love all Smith’s lip balms! This trio is just one lovely option.',
    image: 'assets/rosebud-trio.jpg',
    link: 'https://www.amazon.com/dp/B01N0DVSRE'
  },
  {
    number: 5,
    name: 'Queen/King Size Heated Blankey',
    price: '$52.99',
    category: 'Cozy & Wellness',
    note: 'Any queen- or king-size heated blanket works—it does not have to be this brand. $52.99 is the linked example’s price.',
    image: 'assets/heated-blanket.jpg',
    link: 'https://www.amazon.com/dp/B074DW8VRS?th=1'
  },
  {
    number: 13,
    name: 'A permanent bracelet',
    price: 'Price to be confirmed',
    category: 'Jewelry',
    note: 'A permanent jewelry bracelet. All metals must be hypoallergenic, whether gold or silver.',
    image: 'assets/permanent-bracelet-photo.webp',
    link: ''
  },
  { number: 14, name: 'Dyson Airwrap Co-anda2x', price: 'See Dyson Spain for price', category: 'Big Wishes', note: 'Spain version only, please: I want the EU plug for use in Spain. Liso+Ondulado, Ceramic Apricot/Topaz.', image: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/gallery/beauty/hair-stylers/airwrap-coanda-2x/ceramic-apricot/Web_590_Gallery_T1T2_Card_3.jpg', link: 'https://www.dyson.es/cuidado-del-cabello/moldeador/airwrap-co-anda2x/liso-ondulado-ceramic-apricot-topaz' },
  {
    number: 15,
    name: 'Hobonichi Keiko Shibata A6 Graph Notebook — Who is it?',
    price: 'Depends on style',
    category: 'Stationery & Art',
    note: 'This is just an example—any Hobonichi would make me happy! Yay for little notebooks.',
    image: 'assets/hobonichi-shibata.jpg',
    link: 'https://www.1101.com/store/techo/en/'
  },
  { number: 16, name: 'Leuchtturm Notebook', price: 'Depends on style', category: 'Stationery & Art', note: 'A lovely notebook for lists and little thoughts.', image: 'assets/leuchtturm-notebook.jpg', link: 'https://www.amazon.com/leuchtturm-notebook/s?k=leuchtturm+notebook' },
  {
    number: 17,
    name: 'Jewelry brands I know and love',
    price: 'Depends on the piece',
    category: 'Jewelry',
    note: 'I love gold jewelry from these brands, and I’d love silver from Pandora too! Photos are inspiration—surprise me with a piece you choose.',
    requirement: 'All jewelry metals must be hypoallergenic, whether gold or silver. Please check the materials of every piece.',
    images: [
      { src: 'assets/rowan-earrings.jpg', alt: 'Rowan gold hoops, an example of the jewelry I like' },
      { src: 'assets/gorjana-earrings.jpg', alt: 'Gorjana gold studs, an example of the jewelry I like' }
    ],
    links: [
      { name: 'Rowan', url: 'https://heyrowan.com/' },
      { name: 'Gorjana', url: 'https://www.gorjana.com/' },
      { name: 'Pandora', url: 'https://us.pandora.net/' }
    ]
  },
  {
    number: 29,
    name: 'A big greenhouse & seedling grow light',
    price: 'Depends on the setup',
    category: 'Big Wishes',
    note: 'I’d love a large greenhouse for a vegetable garden, plus a plant light to start my seedlings early and give them time to thrive. The photo is an example; any brand is welcome.',
    requirement: 'A large outdoor growhouse for vegetables and a grow light for starting seedlings, please.',
    image: 'assets/large-greenhouse.jpg',
    links: [
      { name: 'Grow lights', url: 'https://www.amazon.com/s?k=seedling+grow+lights' },
      { name: 'Greenhouses', url: 'https://www.amazon.com/s?k=large+walk+in+greenhouse+for+vegetables' }
    ]
  },
  { number: 18, name: 'Sargadelos jewelry', price: 'Depends on the piece', category: 'Jewelry', note: 'I’d love you to pick a Sargadelos piece for me! The photo is just an example. All metal parts must be hypoallergenic, whether gold or silver.', image: 'assets/sargadelos-jewelry.jpg', link: 'https://www.sargadelos.com/en-gb/collections/jewelry' },
  { number: 19, name: 'Something special from Sargadelos', price: 'Depends on the piece', category: 'Big Wishes', note: 'A bigger Sargadelos gift picked by you! The photo is just inspiration; choose something you think I’d love.', image: 'assets/sargadelos-vase.jpg', link: 'https://www.sargadelos.com/en-gb' },
  { number: 20, name: 'A sewing machine', price: 'Price to be confirmed', category: 'Stationery & Art', note: 'For little sewing projects. Model to choose. Photo is inspiration; any brand is welcome.', image: 'assets/sewing-machine-photo.jpg', link: 'https://www.amazon.com/s?k=sewing+machine' },
  { number: 21, name: 'Oil painting materials', price: 'Depends on materials', category: 'Stationery & Art', note: 'Oil paints, brushes, and painting supplies for creative afternoons. Photo is inspiration; any brand is welcome.', image: 'assets/oil-paints-photo.jpg', link: 'https://www.amazon.com/s?k=oil+painting+supplies' },
  { number: 22, name: 'Embroidery materials & kits', price: 'Depends on the kit', category: 'Stationery & Art', note: 'Little embroidery projects, hoops, threads, or a lovely kit. Photo is inspiration; any brand is welcome.', image: 'assets/embroidery-photo.jpg', link: 'https://www.amazon.com/s?k=embroidery+kits' },
  { number: 23, name: 'Diamond painting kits', price: 'Depends on the kit', category: 'Stationery & Art', note: 'For a quiet afternoon making something sparkly. Photo is inspiration; any brand is welcome.', image: 'assets/diamond-painting-photo.jpg', link: 'https://www.amazon.com/s?k=diamond+painting+kits' },
  {
    number: 24,
    name: 'Yoshitomo Nara Bandages',
    price: '$12.00',
    category: 'Cozy & Wellness',
    note: 'A little tin of artful bandages.',
    image: 'assets/nara-bandages.jpg',
    link: 'https://store.moma.org/products/yoshitomo-nara-bandages'
  },
  {
    number: 25,
    name: 'Balenciaga Women’s Le City Bag Medium — Black',
    price: '$3,290',
    category: 'Big Wishes',
    note: 'Any City bag will do! This black medium version is just an example; the price is for this linked bag.',
    image: 'https://balenciaga.dam.kering.com/asset/5ea80a8d-70bb-4718-8e7a-ab907277d041/Medium/8230582AB6A1000_F.jpg?v=3',
    link: 'https://www.balenciaga.com/en-us/le-city-bag-medium-black-8230582AB6A1000.html'
  },
  {
    number: 26,
    name: 'Claw clips',
    price: 'Depends on the set',
    category: 'Little Things',
    note: 'Cute claw clips for putting my hair up. Pick a lovely set! Photo is just an example.',
    image: 'assets/claw-clips.jpg',
    link: 'https://www.amazon.com/s?k=hair+claw+clips'
  },
  {
    number: 27,
    name: 'Tatcha The Kissu Lip Mask',
    price: '$29.00',
    category: 'Beauty & Fragrance',
    note: 'I love the Kissu Lip Mask! Tinted or untinted versions would both make me happy. $29 is the linked option’s price.',
    image: 'assets/tatcha-kissu-lip-mask.jpg',
    link: 'https://tatcha.com/products/the-kissu-lip-mask'
  },
  {
    number: 30,
    name: 'The Lovely Bunch Bandages',
    price: '$19.80',
    category: 'Cozy & Wellness',
    note: 'A lovely little bunch of bandages from Benjie.',
    image: 'assets/lovely-bunch.jpg',
    link: 'https://bringbenjie.com/products/the-lovely-bunch'
  },
  {
    number: 31,
    name: 'A leather jewelry box',
    price: 'Depends on the case',
    category: 'Jewelry',
    note: 'I like leather jewelry boxes! Pick one you think I’d love to keep my jewelry organized. The photo is just an example.',
    image: 'assets/leather-jewelry-box.jpg',
    link: 'https://www.amazon.com/s?k=leather+jewelry+box'
  },
  {
    number: 32,
    name: 'Fruit and Veggies Coin Purse',
    price: '$9.00',
    category: 'Little Things',
    note: 'A cute little coin purse from Sew Bonita.',
    image: 'assets/fruit-veggie-purse.jpg',
    link: 'https://sewbonita.com/products/fruit-and-veggies-coin-purse?variant=46406963626151'
  },
  {
    number: 33,
    name: 'Klättermusen Bure 2.0 Backpack 20L',
    price: '$190.00',
    category: 'Big Wishes',
    note: 'Lemon Mist · A 20L backpack for climbing and outdoor adventures.',
    image: 'assets/bure-backpack.jpg',
    link: 'https://www.klattermusen.com/en-us/10167-bure-2-0-backpack-20l-lemon-mist/'
  },
  {
    number: 34,
    name: 'A red light body panel',
    price: 'Depends on the panel',
    category: 'Cozy & Wellness',
    note: 'A red light panel for the body. No specific brand in mind—the photo is just an example.',
    image: 'assets/red-light-panel-photo.jpg',
    link: 'https://www.amazon.com/s?k=red+light+body+panel'
  },
  {
    "number": 35,
    "name": "Collaborating with the Enemy",
    "price": "$24.95",
    "category": "Books & Curiosities",
    "note": "Adam Kahane · Second edition · Paperback list price.",
    "image": "assets/collaborating-enemy.jpg",
    "link": "https://www.amazon.com/s?k=9798890571175"
  },
  {
    "number": 36,
    "name": "A Galician cookbook",
    "price": "€7.00",
    "category": "Books & Curiosities",
    "note": "Cocina tradicional gallega · This Spanish-language cookbook is an example. Pick a lovely Galician cookbook for me! Price is for the pictured book.",
    "image": "assets/galician-cookbook.webp",
    "link": "https://www.amazon.com/s?k=Galician+cookbook"
  },
  {
    "number": 37,
    "name": "A Filipino cookbook",
    "price": "$22.27",
    "category": "Books & Curiosities",
    "note": "Nicole Ponseca & Miguel Trinidad · I Am a Filipino: And This Is How We Cook is an example. Choose a Filipino cookbook for me! Price is for this hardcover listing.",
    "image": "assets/filipino-cookbook.jpg",
    "link": "https://www.amazon.com/s?k=9781579657673"
  },
  {
    "number": 38,
    "name": "The Committee of Sleep",
    "price": "$27.29",
    "category": "Books & Curiosities",
    "note": "Deirdre Barrett · Paperback example price; sellers may vary.",
    "image": "assets/committee-sleep.jpg",
    "link": "https://www.amazon.com/s?k=9780982869505"
  },
  {
    "number": 39,
    "name": "The Gut: Story of Our Incredible Second Brain",
    "price": "£10.99",
    "category": "Books & Curiosities",
    "note": "Payal Kothari · Paperback reference price; availability and import prices vary.",
    "image": "assets/the-gut.jpg",
    "link": "https://www.amazon.com/s?k=9789390547012"
  },
  {
    "number": 40,
    "name": "You Are What Your Grandparents Ate",
    "price": "$7.95",
    "category": "Books & Curiosities",
    "note": "Judith Finlayson · Hardcover listing price.",
    "image": "assets/grandparents-ate.jpg",
    "link": "https://www.amazon.com/s?k=9780778806332"
  },
  {
    "number": 41,
    "name": "Your Brain Is a Time Machine",
    "price": "£13.99",
    "category": "Books & Curiosities",
    "note": "Dean Buonomano · The Neuroscience and Physics of Time · UK paperback list price.",
    "image": "assets/brain-time-machine.jpg",
    "link": "https://www.amazon.com/s?k=9780393355604"
  },
  {
    "number": 42,
    "name": "Grow Your Own Pharmacy",
    "price": "$25.17",
    "category": "Books & Curiosities",
    "note": "Susan Patterson · 51 Healing Plants and How to Use Them · Hardcover reference list price; check Amazon for the current offer.",
    "image": "assets/grow-pharmacy.jpg",
    "link": "https://www.amazon.com/dp/1944462295"
  },
  {
    "number": 43,
    "name": "Lamarck’s Revenge",
    "price": "$28.00",
    "category": "Books & Curiosities",
    "note": "Peter Ward · Hardcover original list price; current offers vary.",
    "image": "assets/lamarcks-revenge.jpg",
    "link": "https://www.amazon.com/s?k=9781632866158"
  },
  {
    "number": 44,
    "name": "Stiff: The Curious Lives of Human Cadavers",
    "price": "$16.95",
    "category": "Books & Curiosities",
    "note": "Mary Roach · Paperback listing price.",
    "image": "assets/stiff.jpg",
    "link": "https://www.amazon.com/s?k=9780393324822"
  },
  {
    "number": 45,
    "name": "Doctors by Nature: How Ants, Apes, and Other Animals Heal Themselves",
    "price": "$27.95",
    "category": "Books & Curiosities",
    "note": "Jaap de Roode · Hardcover list price.",
    "image": "assets/doctors-nature.jpg",
    "link": "https://www.amazon.com/s?k=9780691239248"
  },
  {
    "number": 46,
    "name": "The Sea Is Not Made of Water",
    "price": "£9.99",
    "category": "Books & Curiosities",
    "note": "Adam Nicolson · Also published as Life Between the Tides, shown on this cover. UK paperback list price.",
    "image": "assets/sea-water.jpg",
    "link": "https://www.amazon.com/s?k=9780008294816"
  },
  {
    "number": 47,
    "name": "Your Inner Fish",
    "price": "$18.00",
    "category": "Books & Curiosities",
    "note": "Neil Shubin · Paperback list price.",
    "image": "assets/inner-fish.jpg",
    "link": "https://www.amazon.com/s?k=9780307277459"
  },
  {
    "number": 48,
    "name": "Metazoa: Animal Minds and the Birth of Consciousness",
    "price": "£10.99",
    "category": "Books & Curiosities",
    "note": "Peter Godfrey-Smith · UK paperback list price.",
    "image": "assets/metazoa.jpg",
    "link": "https://www.amazon.com/s?k=9780008321239"
  },
  {
    "number": 49,
    "name": "Life as We Made It",
    "price": "$30.00",
    "category": "Books & Curiosities",
    "note": "Beth Shapiro · How 50,000 Years of Human Innovation Refined—and Redefined—Nature · Hardcover list price.",
    "image": "assets/life-made-it.jpg",
    "link": "https://www.amazon.com/s?k=9781541644182"
  },
  {
    "number": 50,
    "name": "Hacking Darwin",
    "price": "$25.99",
    "category": "Books & Curiosities",
    "note": "Jamie Metzl · Genetic Engineering and the Future of Humanity · Hardcover list price.",
    "image": "assets/hacking-darwin.jpg",
    "link": "https://www.amazon.com/s?k=9781492670094"
  },
  {
    "number": 51,
    "name": "Before There Was a Bible",
    "price": "$39.95",
    "category": "Books & Curiosities",
    "note": "Lee Martin McDonald · Authorities in Early Christianity · Paperback list price; cover may vary by edition.",
    "image": "assets/before-bible.jpg",
    "link": "https://www.amazon.com/s?k=before+there+was+a+bible"
  },
  {
    "number": 52,
    "name": "The Pain Gap",
    "price": "$18.99",
    "category": "Books & Curiosities",
    "note": "Anushay Hossain · How Sexism and Racism in Healthcare Kill Women · Paperback list price.",
    "image": "assets/pain-gap.jpg",
    "link": "https://www.amazon.com/s?k=9781982177799"
  },
  {
    "number": 53,
    "name": "Binoculars for birdwatching",
    "price": "$179.95",
    "category": "Big Wishes",
    "note": "For watching birds! Celestron Nature DX 8×42 is the pictured example; choose a suitable pair for me. Price is for this example.",
    "image": "assets/birdwatching-binoculars.jpg",
    "link": "https://www.amazon.com/s?k=birdwatching+binoculars"
  },
  {
    number: 54,
    name: 'Gel pens',
    price: 'Depends on the set',
    category: 'Stationery & Art',
    note: 'Gel pens for notes, journaling, and little drawings. The pictured set is just an example—pick a set you think I’d love!',
    image: 'assets/gel-pens.jpg',
    link: 'https://www.amazon.com/s?k=gel+pens'
  },
  {
    number: 55,
    name: 'Replaceable You: Adventures in Human Anatomy',
    price: 'See Amazon for price',
    category: 'Books & Curiosities',
    note: 'Mary Roach · The linked edition is the Audible audiobook, narrated by the author.',
    image: 'assets/replaceable-you.jpg',
    link: 'https://www.amazon.com/dp/B0F3QJ6X14'
  },
  {
    number: 56,
    name: 'Prismacolor colored pencils',
    price: 'Depends on the set',
    category: 'Stationery & Art',
    note: 'For colorful drawings and little art projects! The pictured Premier set is an example—pick a set you think I’d love.',
    image: 'assets/prismacolor-pencils.jpg',
    link: 'https://www.amazon.com/s?k=prismacolor+colored+pencils'
  },
  {
    number: 57,
    name: 'Josie Maran Whipped Argan Oil Body Butter',
    price: '$36.00',
    category: 'Beauty & Fragrance',
    note: 'A tried-and-loved favorite—I’ve used this so many times! I love Vanilla Vibezzz, Topless Tangerine, and Golden Hour, and I’d love to try new scents too.',
    image: 'https://www.josiemaran.com/cdn/shop/files/vanilla-vibezzz-body-butter-jar-02.jpg?v=1753375264&width=800',
    link: 'https://www.josiemaran.com/products/whipped-argan-oil-body-butter-vanilla-vibezzz'
  },
{
  "number": 58,
  "name": "Crunchy Mango Squishy",
  "price": "See Amazon for price",
  "category": "Little Things",
  "note": "A crunchy mango squishy for a fun little sensory treat.",
  "image": "https://m.media-amazon.com/images/I/81Mp6ATWwCL._AC_SX679_.jpg",
  "link": "https://www.amazon.com/dp/B0HGQZP6BN"
},
{
  "number": 59,
  "name": "Disney Ears",
  "price": "Depends on the style",
  "category": "Books & Curiosities",
  "note": "Pick a pair of Disney ears you think I’d love! The photo is just an example; the link has lots of styles to choose from.",
  "image": "https://cdn-ssl.s7.shopdisney.com/is/image/DisneyShopping/4503055210690?fmt=jpeg&hei=608&qlt=90&wid=608",
  "link": "https://www.disneystore.com/accessories/adults/ear-hats-headbands/"
},
{
  "number": 60,
  "name": "Dollhouse kit",
  "price": "Depends on the kit",
  "category": "Stationery & Art",
  "note": "A little world to build! Pick a dollhouse or miniature house kit you think I’d love. The photo is just an example.",
  "image": "https://www.robotimeonline.com/cdn/shop/files/76fcec03cb1aa3e3d10407da87f18c27.jpg?v=1723703864&width=800",
  "link": "https://www.amazon.com/s?k=dollhouse+kit"
},
{
  "number": 61,
  "name": "La Mer The Moisturizing Fresh Cream",
  "price": "$390.00",
  "category": "Beauty & Fragrance",
  "note": "The Moisturizing Fresh Cream from La Mer. Shown price is for 2 oz.; smaller sizes are 0.5 oz. for $100 or 1 oz. for $200.",
  "image": "https://www.cremedelamer.com/media/export/cms/products/responsive/lm_sku_4J6W01_4x5_0.png?height=750&width=600",
  "link": "https://www.cremedelamer.com/product/5834/124395/face/moisturizers/the-moisturizing-fresh-cream#/sku/181921"
},
{
  "number": 62,
  "name": "POP MART figures & blind boxes",
  "price": "Depends on the figure or box",
  "category": "Books & Curiosities",
  "note": "Hirono is my favorite, but I love all the characters! Pick a figure or blind box you think I’d love. The Hirono photo is just an example.",
  "image": "https://global-static.popmart.com/globalAdmin/1754633742065____manacle____.png",
  "link": "https://www.popmart.com/us"
},
{
  "number": 63,
  "name": "Clinique Almost Lipstick — Black Honey",
  "price": "$25.00",
  "category": "Beauty & Fragrance",
  "note": "I’ve always wanted to try Black Honey, but never have! This is the shade I’d love to try.",
  "image": "https://www.clinique.com/media/export/cms/products/1200x1500/cl_sku_635906_1200x1500_0.png",
  "link": "https://www.clinique.com/product/1605/4772/makeup/lipsticks/almost-lipstick-in-black-honey-pink-honey-and-nude-honey?shade=Black_Honey"
},
{
  "number": 64,
  "name": "Being Frenshe hair & personal care",
  "price": "Depends on the product",
  "category": "Beauty & Fragrance",
  "note": "I love Being Frenshe’s hair care and personal care products! Pick something you think I’d enjoy—the photo is just an example.",
  "image": "https://target.scene7.com/is/image/Target/GUEST_5c70c6e6-4054-4d0b-9ac5-baf39fe3a6fa?fmt=pjpeg&qlt=80&wid=720",
  "link": "https://www.target.com/b/being-frenshe/-/N-q643leyonhf"
},
{
  "number": 65,
  "name": "Lemax Spooky Town",
  "price": "Depends on the piece",
  "category": "Big Wishes",
  "note": "A spooky little village! Pick a Lemax Spooky Town piece you think I’d love. The haunted house photo is just an example.",
  "image": "https://exycwwgvps8.exactdn.com/wp-content/uploads/2025/12/056098def5db3-f39b-400b-a26a-c4272f2d3b4b.jpg",
  "link": "https://www.amazon.com/s?k=lemax+spooky+town+sale"
},
{
  "number": 66,
  "name": "Bucilla project kits",
  "price": "Depends on the kit",
  "category": "Stationery & Art",
  "note": "I’d love a Bucilla project to make! I’m interested in all seasons, including autumn and winter projects like the pictured stocking. Pick a kit you think I’d enjoy—the photo is just an example.",
  "image": "https://plaidonline.com/media/catalog/product/1/-/1-bu_89742e_north_pole_this_way_stocking.jpg?width=650&height=650&fit=bounds",
  "link": "https://www.amazon.com/stores/Bucilla/page/D9E07B08-F25B-45F5-8B1D-528FE556E5B2"
}
];
// ✦ EDIT YOUR 2026 ADVENT CALENDAR HERE ✦
// Each entry is a calendar wish or surprise. Numbers are internal IDs only.
// Edit its name and note; optionally add
// image: 'assets/photo.jpg', price: '$20', and link: 'https://...' for a gift.
// All entries are visible immediately; there is no date lock.
const adventCalendar2026 = [
  {
    number: 1,
    name: 'Space NK Beauty Advent Calendar',
    price: '€316',
    category: 'Beauty & Fragrance',
    note: 'Ships to Spain only. A little beauty magic for December.',
    image: 'https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwa32382e6/products/NK_MULTI/UK200063764_NK_MULTI.png?sh=582&sw=582',
    link: 'https://www.spacenk.com/uk/gifts/beauty-advent-calendars/beauty-advent-calendar-MUK200063764.html'
  },
  {
    number: 2,
    name: 'Lush Advent Calendar',
    price: '$330',
    category: 'Beauty & Fragrance',
    note: 'For a December full of cozy bath-time treats.',
    image: 'https://www.lush.com/cdn-cgi/image/width%3D3840%2Cf%3Dauto/https%3A//unicorn.lush.com/media/thumbnails/products/Christmas-2026-Lush-Advent-Calendar_hero_01_1_fce29673_thumbnail_4096.jpg',
    link: 'https://www.lush.com/us/en_us/p/lush-advent-calendar-na'
  },
  {
    number: 3,
    name: 'Selfridges Beauty Advent Calendar 2026',
    price: '$305.00',
    category: 'Beauty & Fragrance',
    note: 'Worth £1,278.',
    image: 'assets/selfridges-advent.avif',
    link: 'https://www.selfridges.com/US/en/product/selfridges-beauty-advent-calendar-2026-worth-1278_R04694469/'
  },
  {
    number: 4,
    name: 'Papier 24 Day Advent Calendar',
    price: '$195.00',
    category: 'Books & Curiosities',
    note: 'Little stationery surprises for December.',
    image: 'assets/papier-advent.jpg',
    link: 'https://www.papier.com/us/24-day-advent-calendar-544'
  },
  {
    number: 5,
    name: 'Anthropologie 24 Days of Beauty Advent Calendar',
    price: '$98.00',
    category: 'Beauty & Fragrance',
    note: 'A little beauty surprise for every day.',
    image: 'https://images.urbndata.com/is/image/Anthropologie/113122048_000_g?fit=constrain&qlt=80&wid=640',
    link: 'https://www.anthropologie.com/shop/the-24-days-of-beauty-advent-calendar2'
  },
  {
    number: 6,
    name: 'Keurig® 24 Cups of Cheer Advent Calendar',
    price: '$32.99',
    category: 'Cozy & Wellness',
    note: 'For cozy mornings and a cup of cheer.',
    image: 'https://images.keurig.com/is/image/keurig/Keurig-Advent-Calendar_en_general?hei=640&wid=640',
    link: 'https://www.keurig.com/Beverages/Advent-Calendars/Keurig%C2%AE-24-Cups-of-Cheer-Advent-Calendar/p/Keurig-Advent-Calendar#24_CT'
  },
  {
    number: 7,
    name: 'Anthropologie x Papier 12-Day Stationery Advent Calendar',
    price: '$85.00',
    category: 'Books & Curiosities',
    note: 'Twelve days of little stationery surprises, from notebooks to bookmarks and a pencil case.',
    image: 'assets/anthropologie-papier-advent.jpg',
    link: 'https://www.anthropologie.com/shop/anthropologie-x-papier-12-day-stationery-advent-calendar?color=041'
  },
];
// ✦ EDIT YOUR GIFT CARDS HERE ✦
// Add one object per store. These appear below the regular wishlist only.
// Example (replace the example URL with the store's actual gift card page):
// { name: 'Store name', amount: 'Any amount', note: 'For my next little treat.', link: 'https://example.com/gift-card' }
const giftCards = [
  { name: 'Sephora', amount: 'Any amount', note: 'For a beauty or fragrance treat.', link: 'https://www.sephora.com/beauty/giftcards' },
  { name: 'AMC Theatres', amount: 'Any amount', note: 'For a trip to the movies.', link: 'https://www.amctheatres.com/gift-cards' },
  { name: 'Reading Cinemas', amount: 'Any amount', note: 'For a little trip to the movies.', link: 'https://readingcinemas.com/manville/giftcards' },
  { name: 'Ulta Beauty', amount: 'Any amount', note: 'For my next beauty treat.', link: 'https://www.ulta.com/guestservices/gift-cards' },
  { name: 'Amazon', amount: 'Any amount', note: 'For something on my ever-growing list.', link: 'https://www.amazon.com/gift-cards/b?node=2238192011' },
  { name: 'Free People', amount: 'Any amount', note: 'For a little something from Free People.', link: 'https://www.freepeople.com/fp-gift-cards/' }
];
// ✦ END OF EDITABLE COLLECTIONS ✦
let activeCollection = 'wishlist';

const categories = ['All', 'Little Things', 'Cozy & Wellness', 'Stationery & Art', 'Beauty & Fragrance', 'Books & Curiosities', 'Jewelry', 'Big Wishes'];
const doorStyles = ['cabinet-door', 'window', 'book', 'parcel', 'window', 'drawer'];
const cabinet = document.querySelector('#cabinet');
const filters = document.querySelector('#filters');

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function createWish(item, index) {
  const card = makeElement('article', `wish ${doorStyles[index % doorStyles.length]}`);
  card.dataset.category = item.category || '';
  card.dataset.originalIndex = index;
  card.dataset.price = parsePrice(item.price) ?? '';
  const gift = makeElement('div', 'gift');
  gift.id = `gift-${item.number}`;
  const picture = makeElement('img', 'gift-image');
  picture.src = item.image || 'assets/dream-wish.svg';
  picture.alt = item.name;
  picture.loading = 'lazy';
  picture.addEventListener('error', () => { picture.src = 'assets/dream-wish.svg'; picture.alt = `Decorative illustration for ${item.name}`; }, { once: true });
  if (item.images) {
    const gallery = makeElement('div', 'gift-gallery');
    item.images.forEach(photo => {
      const img = makeElement('img', 'gift-image');
      img.src = photo.src;
      img.alt = photo.alt;
      img.loading = 'lazy';
      gallery.append(img);
    });
    gift.append(gallery);
  } else {
    gift.append(picture);
  }
  if (item.category) gift.append(makeElement('p', 'gift-category', item.category));
  gift.append(makeElement('h2', '', item.name), makeElement('p', 'gift-price', item.price));
  if (item.note) gift.append(makeElement('p', 'gift-note', item.note));
  if (item.requirement) gift.append(makeElement('p', 'gift-requirement', item.requirement));
  const link = makeElement('a', 'visit-item', 'Visit Item ↗');
  // Only allow ordinary web links, even if an incorrect URL is pasted.
  if (item.link) {
  try {
    const url = new URL(item.link);
    if (!['https:', 'http:'].includes(url.protocol)) throw new Error('Use a web URL');
    link.href = url.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Visit ${item.name} (opens in a new tab)`);
    gift.append(link);
  } catch { gift.append(makeElement('p', 'gift-note', 'A product link is coming soon.')); }
  }
  if (item.links) {
    const brandLinks = makeElement('div', 'wish-links');
    item.links.forEach(destination => {
      try {
        const url = new URL(destination.url);
        if (!['https:', 'http:'].includes(url.protocol)) return;
        const anchor = makeElement('a', 'visit-item', `${destination.name} ↗`);
        anchor.href = url.href;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
        anchor.setAttribute('aria-label', `${destination.name} (opens in a new tab)`);
        brandLinks.append(anchor);
      } catch { /* Ignore invalid destination URLs. */ }
    });
    gift.append(brandLinks);
  }
  card.append(gift);
  return card;
}

wishlist.forEach((item, index) => cabinet.append(createWish(item, index)));
// Custom categories added to products also appear automatically.
const allCategories = [...new Set([...categories, ...wishlist.map(item => item.category).filter(Boolean)])];
allCategories.forEach(category => {
  const button = makeElement('button', 'filter', category);
  button.type = 'button';
  button.setAttribute('aria-pressed', String(category === 'All'));
  button.addEventListener('click', () => {
    filters.querySelectorAll('button').forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    let count = 0;
    cabinet.querySelectorAll('.wish').forEach(card => {
      card.hidden = category !== 'All' && card.dataset.category !== category;
      if (!card.hidden) count++;
    });
    updateCount(count);
  });
  filters.append(button);
});
function updateCount(count) {
  document.querySelector('#wish-count').textContent = activeCollection === 'advent' ? `${count} little surprises` : `${count} ${count === 1 ? 'wish' : 'wishes'} tucked away`;
}
updateCount(wishlist.length);
// Switch collections and support the standard arrow-key tab navigation.
const collectionTabs = [...document.querySelectorAll('[role="tab"]')];
function selectCollection(tab) {
  activeCollection = tab.id === 'advent-tab' ? 'advent' : 'wishlist';
  collectionTabs.forEach(button => {
    button.setAttribute('aria-selected', String(button === tab));
    button.tabIndex = button === tab ? 0 : -1;
  });
  document.querySelector('#collection-panel').setAttribute('aria-labelledby', tab.id);
  filters.hidden = activeCollection === 'advent';
  document.querySelector('#gift-cards-section').hidden = activeCollection === 'advent';
  document.querySelector('#advent-intro').hidden = activeCollection !== 'advent';
  document.querySelector('.cabinet-label').textContent = activeCollection === 'advent' ? 'ADVENT • 2026' : 'THE WISH CABINET';
  const items = activeCollection === 'advent' ? adventCalendar2026 : wishlist;
  cabinet.replaceChildren(...items.map(createWish));
  sortCabinet();
  filters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.textContent === 'All')));
  updateCount(items.length);
}
collectionTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectCollection(tab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? collectionTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + collectionTabs.length) % collectionTabs.length;
    selectCollection(collectionTabs[next]);
    collectionTabs[next].focus();
  });
});

// Compare the displayed numeric amounts; no exchange rates are requested.
// Use prices such as '$305.00', '€316', or '£1,278'.
function parsePrice(price) {
  const amount = String(price ?? '').replace(/[$€£,\s]/g, '');
  return /^\d+(\.\d+)?$/.test(amount) ? Number(amount) : null;
}

function sortCabinet() {
  const order = document.querySelector('#price-sort').value;
  const cards = [...cabinet.querySelectorAll('.wish')];
  cards.sort((first, second) => {
    const originalOrder = Number(first.dataset.originalIndex) - Number(second.dataset.originalIndex);
    if (order === 'original') return originalOrder;
    const firstMissing = first.dataset.price === '';
    const secondMissing = second.dataset.price === '';
    if (firstMissing !== secondMissing) return firstMissing ? 1 : -1;
    if (firstMissing) return originalOrder;
    const difference = Number(first.dataset.price) - Number(second.dataset.price);
    return (order === 'ascending' ? difference : -difference) || originalOrder;
  });
  // Move existing cards so category visibility and gift details stay intact.
  cabinet.append(...cards);
}
document.querySelector('#price-sort').addEventListener('change', sortCabinet);

// Gift cards are a separate collection; cabinet filters and sorting do not hide them.
const giftCardsGrid = document.querySelector('#gift-cards-grid');
giftCards.forEach(item => {
  const card = makeElement('article', 'gift-card');
  const ornament = makeElement('span', 'gift-card-ornament', '✉');
  ornament.setAttribute('aria-hidden', 'true');
  card.append(ornament, makeElement('h3', '', item.name));
  card.append(makeElement('p', 'gift-card-amount', item.amount || 'Any amount'));
  if (item.note) card.append(makeElement('p', 'gift-card-note', item.note));
  try {
    const url = new URL(item.link);
    if (!['https:', 'http:'].includes(url.protocol)) throw new Error('Use a web URL');
    const link = makeElement('a', 'visit-item', 'Visit Gift Card ↗');
    link.href = url.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Visit ${item.name} gift card (opens in a new tab)`);
    card.append(link);
  } catch {
    card.append(makeElement('p', 'gift-card-note', 'Gift card link coming soon.'));
  }
  giftCardsGrid.append(card);
});
document.querySelector('#gift-cards-empty').hidden = giftCards.length > 0;

// The gift-card shortcut also works when the Advent Calendar tab is selected.
document.querySelector('#gift-card-jump').addEventListener('click', event => {
  event.preventDefault();
  if (activeCollection !== 'wishlist') selectCollection(document.querySelector('#wishlist-tab'));
  const heading = document.querySelector('#gift-cards-title');
  heading.focus({ preventScroll: true });
  document.querySelector('#gift-cards-section').scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    block: 'start'
  });
});
