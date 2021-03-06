# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Listing.destroy_all

u1 = User.create!(
    email: 'demo',
    password: 'password'
)

listing1 = Listing.create!( 
    title: 'Vintage Gibson for sale', 
    brand: 'Gibson', 
    model: 'les Paul', 
    price: 4560, 
    description: 'Vintage Gibson from the 80s for sale' 
) 

file = File.open('app/assets/images/gibson.jpg')

listing1.photo.attach(io: file, filename: 'gibson.jpg')
