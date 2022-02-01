json.extract! user, :id, :first_name, :last_name, :zipcode
json.preferences user.preferences
json.photoUrls user.photo.map { |file| url_for(file) }