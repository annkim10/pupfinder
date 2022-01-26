@rescues.each do |rescueorg|
    json.set! rescueorg.id do
        json.extract! rescueorg, :id, :org_name, :org_address, :org_email, :org_phone, :org_website, :org_bio
        json.photoUrl url_for(rescueorg.photo)
    end
end

