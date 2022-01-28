json.extract! @user, :id, :first_name, :last_name, :zipcode
json.photoUrl url_for(@user.photo)
# json.errors @errors