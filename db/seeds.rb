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
require "open-uri"

user1 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, zipcode: 11101, email: Faker::Internet.email, password: 'password') 
user2 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, zipcode: 11101, email: Faker::Internet.email, password: 'password') 
user3 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, zipcode: 11101, email: Faker::Internet.email, password: 'password') 
user4 = User.create(first_name: 'Demo', last_name: 'User', zipcode: 11101, email: 'demouser@demo.com', password: 'password') 
user4.photo.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/demouser.jpg"), filename: "demouser.jpg")

org1 = RescueOrg.create(org_name: 'Furever Homes', org_address: Faker::Address.full_address, org_email: 'fureverhomes@email.com', org_phone: '202-555-0166', org_website: 'www.fureverhomes.com', org_bio: 'We strive to find furever homes for all our pups' )
org1.photo.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/furever-logo.jpg"), filename: "furever-logo.jpg")

org2 = RescueOrg.create(org_name: 'Search and Luv', org_address: Faker::Address.full_address, org_email: 'searchandluv@email.com', org_phone: '202-555-0166', org_website: 'www.searchluv.com', org_bio: 'We search, rescue, and find loving homes for every stray pup' )
org2.photo.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/search-logo.jpg"), filename: "search-logo.jpg")

org3 = RescueOrg.create(org_name: 'Rescue Hearts', org_address: Faker::Address.full_address, org_email: 'rescuehearts@email.com', org_phone: '202-555-0166', org_website: 'www.rescuehearts.com', org_bio: 'We believe pups of any age, size or breed deserve loving homes' )
org3.photo.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/hearts-logo.jpg"), filename: "hearts-logo.jpg")

pup1 = Pup.create(org_id: org1.id, pup_name: 'Pippa', pup_breed: 'Terrier Mix', pup_size: 'Small', pup_gender:'Female',pup_age: 'Puppy', pup_bio: "Pippa is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Pippa today!", house_trained: "No", special_needs: "No", activity_level: "Active", good_with_other_dogs: "Yes")

pup1.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/pippa1.jpg"), filename: "pippa1.jpg")
pup1.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/pippa2.jpg"), filename: "pippa2.jpg")
pup1.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/pippa3.jpg"), filename: "pippa3.jpg")

pup2 = Pup.create(org_id: org1.id, pup_name: 'Holly', pup_breed: 'Rat Terrier & Shepherd Mix', pup_size: 'Medium', pup_gender:'Female', pup_age: 'Puppy', pup_bio: "Holly is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Holly today!", house_trained: "No", special_needs: "Yes", activity_level: "Active", good_with_other_dogs: "Yes")

pup2.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/holly1.jpg"), filename: "holly1.jpg")
pup2.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/holly2.jpg"), filename: "holly2.jpg")
pup2.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/holly3.jpg"), filename: "holly3.jpg")

pup3 = Pup.create(org_id: org1.id, pup_name: 'Lupita', pup_breed: 'Schnauzer & American Staffordshire Terrier Mix', pup_size: 'Small', pup_gender:'Female', pup_age: 'Puppy', pup_bio: "Lupita is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Lupita today!", house_trained: "No", special_needs: "No", activity_level: "Active", good_with_other_dogs: "Yes")

pup3.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/lupita1.jpg"), filename: "lupita1.jpg")
pup3.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/lupita2.jpg"), filename: "lupita2.jpg")
pup3.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/lupita3.jpg"), filename: "lupita3.jpg")

pup4 = Pup.create(org_id: org1.id, pup_name: 'Laika', pup_breed: 'Shepherd & Bloodhound Mix', pup_size: 'Small', pup_gender:'Female', pup_age: 'Puppy', pup_bio: "Laika is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Laika today!", house_trained: "No", special_needs: "No", activity_level: "Active", good_with_other_dogs: "Yes")

pup4.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/laika1.jpg"), filename: "laika1.jpg")
pup4.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/laika2.jpg"), filename: "laika2.jpg")
pup4.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/laika3.jpg"), filename: "laika3.jpg")

pup5 = Pup.create(org_id: org1.id, pup_name: 'Virginia', pup_breed: 'Hound Mix', pup_size: 'Small', pup_gender:'Female', pup_age: 'Puppy', pup_bio: "Virginia is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Virginia today!", house_trained: "No", special_needs: "No", activity_level: "Active", good_with_other_dogs: "Yes")

pup5.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/virginia1.jpg"), filename: "virginia1.jpg")
pup5.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/virginia2.jpg"), filename: "virginia2.jpg")
pup5.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/virginia3.jpg"), filename: "virginia3.jpg")

pup6 = Pup.create(org_id: org1.id, pup_name: 'Doreen', pup_breed: 'Mixed Breed', pup_size: 'Medium', pup_gender:'Female', pup_age: 'Puppy', pup_bio: "Doreen is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Doreen today!",house_trained: "No", special_needs: "Yes", activity_level: "Active",good_with_other_dogs: "Yes")

pup6.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/doreen1.jpg"), filename: "doreen1.jpg")
pup6.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/doreen2.jpg"), filename: "doreen2.jpg")

pup7 = Pup.create(org_id: org1.id, pup_name: 'Baby', pup_breed: 'Mixed Breed', pup_size: 'Medium', pup_gender:'Female', pup_age: 'Puppy', pup_bio: "Baby is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Baby today!",house_trained: "No", special_needs: "No", activity_level: "Active",good_with_other_dogs: "Yes")

pup7.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/baby1.jpg"), filename: "baby1.jpg")
pup7.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/baby2.jpg"), filename: "baby2.jpg")
pup7.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/baby3.jpg"), filename: "baby3.jpg")

pup8 = Pup.create(org_id: org1.id, pup_name: 'Starfire', pup_breed: 'Staffordshire Bull Terrier Mix', pup_size: 'Medium', pup_gender:'Female', pup_age: 'Puppy', pup_bio: "Starfire is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Starfire today!",house_trained: "No", special_needs: "Yes", activity_level: "Active", good_with_other_dogs: "Yes")

pup8.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/starfire1.jpg"), filename: "starfire1.jpg")
pup8.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/starfire2.jpg"), filename: "starfire2.jpg")
pup8.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/starfire3.jpg"), filename: "starfire3.jpg")

pup9 = Pup.create(org_id: org1.id, pup_name: 'Olivia', pup_breed: 'Beagle', pup_size: 'Medium', pup_gender:'Female', pup_age: 'Puppy', pup_bio: "Olivia is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Olivia today!",house_trained: "No", special_needs: "No", activity_level: "Active", good_with_other_dogs: "No")

pup9.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/olivia1.jpg"), filename: "olivia1.jpg")
pup9.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/olivia2.jpg"), filename: "olivia2.jpg")
pup9.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/olivia3.jpg"), filename: "olivia3.jpg")

pup10 = Pup.create(org_id: org1.id, pup_name: 'Thena', pup_breed: 'Mixed Breed', pup_size: 'Medium', pup_gender:'Female', pup_age: 'Puppy', pup_bio: "Thena is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Thena today!",house_trained: "No", special_needs: "No", activity_level: "Active", good_with_other_dogs: "Yes")

pup10.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/thena1.jpg"), filename: "thena1.jpg")
pup10.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/thena2.jpg"), filename: "thena2.jpg")
pup10.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/thena3.jpg"), filename: "thena3.jpg")

pup11 = Pup.create(org_id: org2.id, pup_name: 'Cece', pup_breed: 'Chihuahua', pup_size: 'Small', pup_gender:'Female', pup_age: 'Adult', pup_bio: "Cece is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Cece today!", house_trained: "Yes", special_needs: "No", activity_level: "Very Active", good_with_other_dogs: "Yes")

pup11.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/cece1.jpg"), filename: "cece1.jpg")
pup11.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/cece2.jpg"), filename: "cece2.jpg")
pup11.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/cece3.jpg"), filename: "cece3.jpg")

pup12 = Pup.create(org_id: org2.id, pup_name: 'Daisy', pup_breed: 'Chihuahua & Terrier Mix', pup_size: 'Small', pup_gender:'Female', pup_age: 'Adult', pup_bio: "Daisy is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Daisy today!", house_trained: "Yes", special_needs: "No", activity_level: "Very Active", good_with_other_dogs: "Yes")

pup12.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/daisy1.jpg"), filename: "daisy1.jpg")
pup12.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/daisy2.jpg"), filename: "daisy2.jpg")
pup12.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/daisy3.jpg"), filename: "daisy3.jpg")

pup13 = Pup.create(org_id: org2.id, pup_name: 'Hershey', pup_breed: 'Labrador Retriever & Staffordshire Bull Terrier Mix', pup_size: 'Medium', pup_gender:'Female', pup_age: 'Adult', pup_bio: "Hershey is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Hershey today!", house_trained: "Yes", special_needs: "No", activity_level: "Very Active", good_with_other_dogs: "Yes")

pup13.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/hershey1.jpg"), filename: "hershey1.jpg")
pup13.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/hershey2.jpg"), filename: "hershey2.jpg")
pup13.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/hershey3.jpg"), filename: "hershey3.jpg")

pup14 = Pup.create(org_id: org2.id, pup_name: 'Sparky', pup_breed: 'Jack Russell Terrier & Dachshund Mix', pup_size: 'Medium', pup_gender:'Male', pup_age: 'Adult', pup_bio: "Sparky is a friendly, sweet and patient pup. Vaccinations are up to date and he is neutered. Introduce yourself to Sparky today!", house_trained: "No", special_needs: "Yes", activity_level: "Laid-back", good_with_other_dogs: "No")

pup14.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/sparky1.jpg"), filename: "sparky1.jpg")
pup14.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/sparky2.jpg"), filename: "sparky2.jpg")
pup14.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/sparky3.jpg"), filename: "sparky3.jpg")

pup15 = Pup.create(org_id: org2.id, pup_name: 'Laney', pup_breed: 'Pit Bull Terrier & Labrador Retriever Mix', pup_size: 'Medium', pup_gender:'Female', pup_age: 'Adult', pup_bio: "Laney is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Laney today!", house_trained: "Yes", special_needs: "No", activity_level: "Laid-back", good_with_other_dogs: "Yes")

pup15.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/laney1.jpg"), filename: "laney1.jpg")
pup15.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/laney2.jpg"), filename: "laney2.jpg")
pup15.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/laney3.jpg"), filename: "laney3.jpg")

pup16 = Pup.create(org_id: org2.id, pup_name: 'Silas', pup_breed: 'American Staffordshire Terrier Mix', pup_size: 'Large', pup_gender:'Male', pup_age: 'Adult', pup_bio: "Silas is a friendly, sweet and patient pup. Vaccinations are up to date and he is neutered. Introduce yourself to Silas today!", house_trained: "Yes", special_needs: "No", activity_level: "Laid-back", good_with_other_dogs: "Yes")

pup16.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/silas1.jpg"), filename: "silas1.jpg")
pup16.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/silas2.jpg"), filename: "silas2.jpg")
pup16.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/silas3.jpg"), filename: "silas3.jpg")
pup16.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/silas4.jpg"), filename: "silas4.jpg")

pup17 = Pup.create(org_id: org2.id, pup_name: 'Beau', pup_breed: 'Hound Mix', pup_size: 'Large', pup_gender:'Male', pup_age: 'Adult', pup_bio: "Beau is a friendly, sweet and patient pup. Vaccinations are up to date and he is neutered. Introduce yourself to Beau today!", house_trained: "Yes", special_needs: "No", activity_level: "Laid-back", good_with_other_dogs: "No")

pup17.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/beau1.jpg"), filename: "beau1.jpg")
pup17.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/beau2.jpg"), filename: "beau2.jpg")
pup17.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/beau3.jpg"), filename: "beau3.jpg")

pup18 = Pup.create(org_id: org2.id, pup_name: 'Nick', pup_breed: 'Labrador Retriever Mix', pup_size: 'Large', pup_gender:'Male', pup_age: 'Adult', pup_bio: "Nick is a friendly, sweet and patient pup. Vaccinations are up to date and he is neutered. Introduce yourself to Nick today!", house_trained: "Yes", special_needs: "No", activity_level: "Laid-back", good_with_other_dogs: "Yes")

pup18.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/nick1.jpg"), filename: "nick1.jpg")
pup18.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/nick2.jpg"), filename: "nick2.jpg")
pup18.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/nick3.jpg"), filename: "nick3.jpg")

pup19 = Pup.create(org_id: org2.id, pup_name: 'Duke', pup_breed: 'Treeing Walker Coonhound Mix', pup_size: 'Large', pup_gender:'Male', pup_age: 'Adult', pup_bio: "Duke is a friendly, sweet and patient pup. Vaccinations are up to date and he is neutered. Introduce yourself to Duke today!", house_trained: "Yes", special_needs: "No", activity_level: "Active", good_with_other_dogs: "Yes")

pup19.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/duke1.jpg"), filename: "duke1.jpg")
pup19.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/duke2.jpg"), filename: "duke2.jpg")
pup19.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/duke3.jpg"), filename: "duke3.jpg")

pup20 = Pup.create(org_id: org2.id, pup_name: 'Jillian', pup_breed: 'Yorkshire Terrier', pup_size: 'Small', pup_gender:'Female', pup_age: 'Senior', pup_bio: "Jillian is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Jillian today!", house_trained: "No", special_needs: "Yes", activity_level: "Laid-back", good_with_other_dogs: "No")

pup20.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/jillian1.jpg"), filename: "jillian1.jpg")
pup20.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/jillian2.jpg"), filename: "jillian2.jpg")
pup20.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/jillian3.jpg"), filename: "jillian3.jpg")

pup21 = Pup.create(org_id: org3.id, pup_name: 'Morris', pup_breed: 'Maltese & Maltipoo Mix', pup_size: 'Small', pup_gender:'Male', pup_age: 'Senior', pup_bio: "Morris is a friendly, sweet and patient pup. Vaccinations are up to date and he is neutered. Introduce yourself to Morris today!", house_trained: "Yes", special_needs: "No", activity_level: "Laid-back", good_with_other_dogs: "Yes")

pup21.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/morris1.jpg"), filename: "morris1.jpg")
pup21.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/morris2.jpg"), filename: "morris2.jpg")
pup21.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/morris3.jpg"), filename: "morris3.jpg")

pup22 = Pup.create(org_id: org3.id, pup_name: 'Diamond', pup_breed: 'Pit Bull Terrier Mix', pup_size: 'Large', pup_gender:'Female', pup_age: 'Senior', pup_bio: "Diamond is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Diamond today!",house_trained: "Yes", special_needs: "No", activity_level: "Laid-back", good_with_other_dogs: "Yes")

pup22.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/diamond1.jpg"), filename: "diamond1.jpg")
pup22.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/diamond2.jpg"), filename: "diamond2.jpg")
pup22.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/diamond3.jpg"), filename: "diamond3.jpg")

pup23 = Pup.create(org_id: org3.id, pup_name: 'Chloe', pup_breed: 'Boxer', pup_size: 'Medium', pup_gender:'Female', pup_age: 'Senior', pup_bio: "Chloe is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Chloe today!", house_trained: "No", special_needs: "Yes", activity_level: "Laid-back", good_with_other_dogs: "No")

pup23.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/chloe1.jpg"), filename: "chloe1.jpg")
pup23.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/chloe2.jpg"), filename: "chloe2.jpg")
pup23.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/chloe3.jpg"), filename: "chloe3.jpg")

pup24 = Pup.create(org_id: org3.id, pup_name: 'Rhonda', pup_breed: 'Labrador Retriever Mix', pup_size: 'Medium', pup_gender:'Female', pup_age: 'Senior', pup_bio: "Rhonda is a friendly, sweet and patient pup. Vaccinations are up to date and she is spayed. Introduce yourself to Rhonda today!", house_trained: "Yes", special_needs: "No", activity_level: "Laid-back", good_with_other_dogs: "Yes")

pup24.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/Rhonda1.jpg"), filename: "Rhonda1.jpg")
pup24.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/Rhonda2.jpg"), filename: "Rhonda2.jpg")
pup24.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/Rhonda3.jpg"), filename: "Rhonda3.jpg")

pup25 = Pup.create(org_id: org3.id, pup_name: 'Otis', pup_breed: 'Shepherd Mix', pup_size: 'Medium', pup_gender:'Male', pup_age: 'Senior', pup_bio: "Otis is a friendly, sweet and patient pup. Vaccinations are up to date and he is neutered. Introduce yourself to Otis today!", house_trained: "No", special_needs: "Yes", activity_level: "Laid-back", good_with_other_dogs: "No")

pup25.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/otis1.jpg"), filename: "otis1.jpg")
pup25.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/otis2.jpg"), filename: "otis2.jpg")
pup25.photos.attach(io: open("https://pupfinder-dev.s3.amazonaws.com/otis3.jpg"), filename: "otis3.jpg")