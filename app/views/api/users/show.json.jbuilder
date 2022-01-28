json.extract! @user, :id, :first_name, :last_name, :zipcode
json.photoUrls @user.photo.map { |file| url_for(file) }
# json.errors @errors