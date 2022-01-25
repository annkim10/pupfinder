  json.extract! @pup, :org_id, :pup_name, :pup_breed, :pup_size, :pup_gender, :pup_age, :pup_bio

  # json.photoUrls @pup.photos.map { |file| url_for(file) }