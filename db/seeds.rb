# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#USER CLASS 

User.destroy_all

user1 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, zipcode: 11101, email: Faker::Internet.email, password: 'password') 
user2 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, zipcode: 11101, email: Faker::Internet.email, password: 'password') 
user3 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, zipcode: 11101, email: Faker::Internet.email, password: 'password') 
user4 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, zipcode: 11101, email: Faker::Internet.email, password: 'password') 