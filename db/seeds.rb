# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Dog.destroy_all
Cat.destroy_all

Dog.create!(
  name: "Leo",
  breed: "Lab/rotti mix",
  age: 10,
  gender: "Male",
  size: "large",
  color: "Black", 
  image_url: "Leo.com",
  spayed_neutered: "Yes",
  housetrained: "Yes",
  description: "A good boy",
  good_with_dogs: "Yes",
  good_with_cats: "Yes",
  good_with_kids: "Yes",
  location_name: "None",
  location_address: "None",
  intake_date: "July 23, 2010",
  adoption_price: 100000
)
Cat.create!(
  name: "Leela",
  breed: "Scottish Fold",
  age: 3,
  gender: "Female",
  size: "Small",
  color: "White", 
  image_url: "Leela.com",
  spayed_neutered: "Yes",
  declawed: "No",
  housetrained: "Yes",
  description: "A good girl",
  good_with_dogs: "Yes",
  good_with_cats: "Yes",
  good_with_kids: "Yes",
  location_name: "None",
  location_address: "None",
  intake_date: "July 23, 2017",
  adoption_price: 100000
)