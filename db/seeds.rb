# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Animal.create!(
  species: 'asasd',
  age: 23,
  breed: 'asda'
)

User.create!(
  username: 'aa1234',
  email: 'a1234@live.com',
  password: '123456',
  is_admin: true,
  
)