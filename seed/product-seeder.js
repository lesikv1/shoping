var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shoping');

var products = [
  new Product({
    imagePath: 'http://www.parkingsdeparis.com/include/images/bg-paris.jpg',
    title: 'Paris',
    description: 'Paris - the city, the capital of France; the administrative center of the region Ile-de-France. It forms a commune and the department, divided into 20 districts. Population - 2,274,000 people, the fifth largest city in the European Union.',
    price: 120
  }),
  new Product({
    imagePath: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/LONDON_shutterstock_229478404--tojpeg_1417791048879_x1.jpg',
    title: 'London',
    description: 'London - the capital and largest city of the United Kingdom of Great Britain and Northern Ireland. Administrative forms in England Greater London region, divided into 33 self-governing region.',
    price: 135
  }),
  new Product({
    imagePath: 'http://i2.mirror.co.uk/incoming/article7752812.ece/ALTERNATES/s615/Rome-Colosseum.jpg',
    title: 'Rome',
    description: 'Rome - a city, capital of Italy, the administrative center of the province of Rome and the Lazio region. Located on the Tiber river. Rome - one of the oldest cities in the world, the ancient capital of the Roman Empire. Even in ancient Rome became often called Eternal.',
    price: 115
  }),
  new Product({
    imagePath: 'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/5250/SITours/viator-exclusive-statue-of-liberty-monument-access-and-9-11-memorial-in-new-york-city-141987.jpg',
    title: 'New york',
    description: 'New York City - the largest city in the US, part of one of the largest agglomerations in the world. The population is 8,405,837 people, agglomeration -. 20,630,000 New York is located on the Atlantic coast in the south-eastern part of New York State.',
    price: 200
  }),
  new Product({
    imagePath: 'http://interest-travel.ru/wp-content/uploads/2015/04/tibet.jpg',
    title: 'Tibet',
    description: 'Tibet - the region of Central Asia, located on the Tibetan Plateau. It is a cultural and religious community, which are the hallmarks of the Tibetan language and Tibetan Buddhism. Indigenous people - Tibetans.',
    price: 80
  }),
  new Product({
    imagePath: 'http://promum.com.ua/wp-content/uploads/2016/04/berlin-Brandenburg-Gate-1112x630.jpg',
    title: 'Berlin',
    description: 'Berlin - the capital and largest city in Germany, the second most populous and fifth in size city of the European Union. It is one of 16 lands in the Federal Republic of Germany.',
    price: 110
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
} 

function exit() {
  mongoose.disconnect();
}
