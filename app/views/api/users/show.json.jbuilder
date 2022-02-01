json.extract! @user, :id, :first_name, :last_name
json.preferences @user.preferences
json.photoUrls @user.photo.map { |file| url_for(file) }
# json.errors @errors