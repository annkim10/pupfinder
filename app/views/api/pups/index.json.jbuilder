@pups.each do |pup|
    json.set! pup.id do
        json.extract! pup, :id, :org_id, :pup_name, :pup_breed, :pup_size, :pup_gender, :pup_age, :pup_bio, :house_trained, :special_needs, :activity_level, :good_with_other_dogs
        json.photoUrls pup.photos.map { |file| url_for(file) }
    end
end

