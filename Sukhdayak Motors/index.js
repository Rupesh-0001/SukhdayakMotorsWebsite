const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.get('/', function(req, res){
  // res.send('<h1 style="color:midnightblue;">We need not to update content header Express does it for us</h1>');

      return res.render('index', {
        title:"Car"
        });
    });
    app.get('/stock', function(req, res){
      // res.send('<h1 style="color:midnightblue;">We need not to update content header Express does it for us</h1>');
    
          return res.render('Stock', {
            title:"Stock"
            });
        });



var cars = {
  dzire:{
    id: "1",
    brand: "Maruti",
    model: "Swift Dzire",
    year: "2015",
    transmition: "Manual",
    driven: "42000 Kms",
    owners: "First",
    fuel: "Diesel",
    price: "₹5,65,000",
    img: 
    [
      "/Images/SwiftDzire/SwiftDzire1.jpg",
      "/Images/SwiftDzire/SwiftDzire2.jpg",
      "/Images/SwiftDzire/SwiftDzire3.jpg",
      "/Images/SwiftDzire/SwiftDzire4.JPG",
    ]
  },
  polo:{
    id: "2",
    brand: "Volkswagen",
    model: "Polo Comfort Line",
    year: "2015",
    transmition: "Manual",
    driven: "82000 Kms",
    owners: "First",
    fuel: "Diesel",
    price: "₹4,50,000",
    img: 
    [
      "/Images/polo/polo1.jpg",
      "/Images/polo/polo2.jpg",
      "/Images/polo/polo3.jpg",
      "/Images/polo/polo4.jpg"
    ]
  },
  i20:{
    id: "3",
    brand: "Hyundai",
    model: "i20 Sportz",
    year: "2014",
    transmition: "Manual",
    driven: "55000 Kms",
    owners: "First",
    fuel: "Petrol",
    price: "₹5,00,000",
    img: 
    [
      "/Images/i20/i20_1.jpg",
      "/Images/i20/i20_2.jpg",
      "/Images/i20/i20_3.jpg",
      "/Images/i20/i20_4.jpg",
    ]
  },
  i10b:{
    id: "4",
    brand: "Hyundai",
    model: "i10 Era",
    year: "2008",
    transmition: "Manual",
    driven: "56000 Kms",
    owners: "First",
    fuel: "Petrol",
    price: "₹1,90,000",
    img: 
    [
      "/Images/i10b/i10b1.jpg",
      "/Images/i10b/i10b2.jpg",
      "/Images/i10b/i10b3.jpg",
      "/Images/i10b/i10b4.jpg",
    ]
  },
  i10w:{
    id: "5",
    brand: "Hyundai",
    model: "i10 Era",
    year: "2008",
    transmition: "Manual",
    driven: "56000 Kms",
    owners: "First",
    fuel: "Petrol",
    price: "₹1,90,000",
    img: 
    [
      "/Images/i10w/i10w1.jpg",
      "/Images/i10w/i10w2.jpg",
      "/Images/i10w/i10w3.jpg",
      "/Images/i10w/i10w4.jpg"
    ]
  },
  santro:{
    id: "6",
    brand: "Hyundai",
    model: "Santro GLS",
    year: "2008",
    transmition: "Manual",
    driven: "65000 Kms",
    owners: "First",
    fuel: "Petrol",
    price: "₹1,50,000",
    img: 
    [
      "/Images/santro/santro1.jpg",
      "/Images/santro/santro2.jpg",
      "/Images/santro/santro3.jpg",
      "/Images/santro/santro4.jpg"
    ]
  }
}





// app.get('/car-brand/:brand', function(req, res){
//   let brand = req.params.brand;
//   var arr;
//   for(i in cars)
//   {
//     console.log(i+"***********")
//     if(i.company == brand){
//       arr.push(i);
//     }
//   }
//   console.log(arr[0]);
// })

app.get('/car-details/:rupesh', function(req, res){
  let temp =  req.params.rupesh

  let car = JSON.parse(JSON.stringify(cars));
  
  return res.render('car_details', {
    title:req.params.car,
    car: car[temp] 
    // Contact_list : contacts
    });
})




app.listen(port, function(err){
  if(err){
    console.log('Oops!, server is down', err);
  }
  console.log('Server is healthy and running ar port: ', port);
})
