# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#add a demo login seed create object and when click on the button, dispatch login user with the demo login object

#USER CLASS 

User.destroy_all
RescueOrg.destroy_all
Pup.destroy_all

user1 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, zipcode: 11101, email: Faker::Internet.email, password: 'password') 
user2 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, zipcode: 11101, email: Faker::Internet.email, password: 'password') 
user3 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, zipcode: 11101, email: Faker::Internet.email, password: 'password') 
user4 = User.create(first_name: 'Demo', last_name: 'User', zipcode: 11101, email: 'demouser@demo.com', password: 'password') 

org1 = RescueOrg.create(org_name: 'Furever Homes', org_address: Faker::Address.full_address, org_email: 'fureverhomes@email.com', org_phone: '202-555-0166', org_website: 'www.fureverhomes.com', org_bio: 'We strive to find furever homes for all our pups' )
org2 = RescueOrg.create(org_name: 'Search and Luv', org_address: Faker::Address.full_address, org_email: 'searchandluv@email.com', org_phone: '202-555-0166', org_website: 'www.searchluv.com', org_bio: 'We search, rescue, and find loving homes for every stray pup' )
org3 = RescueOrg.create(org_name: 'Rescue Hearts', org_address: Faker::Address.full_address, org_email: 'rescuehearts@email.com', org_phone: '202-555-0166', org_website: 'www.rescuehearts.com', org_bio: 'We believe pups of any age, size or breed deserve loving homes' )

