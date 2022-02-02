class CreateRescueOrgs < ActiveRecord::Migration[5.2]
  def change
    create_table :rescue_orgs do |t|
      t.string :org_name, null: false
      t.string :org_address, null: false 
      t.string :org_email, null: false 
      t.string :org_phone, null: false
      t.string :org_website, null: false 
      t.text :org_bio, null: false
      t.timestamps
    end
  end
end
