#  json.extract! @rescueorg, :id, :org_name, :org_address, :org_email, :org_phone, :org_website, :org_bio 
 json.extract! @rescue, :id, :org_name, :org_address, :org_email, :org_phone, :org_website
 json.photoUrl url_for(@rescue.photo)
 