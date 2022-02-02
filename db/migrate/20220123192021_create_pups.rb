class CreatePups < ActiveRecord::Migration[5.2]
  def change
    create_table :pups do |t|
      t.integer :org_id, null: false 
      t.string :pup_name, null: false 
      t.string :pup_breed, null: false 
      t.string :pup_size, null: false 
      t.string :pup_gender, null: false 
      t.string :pup_age, null: false
      t.text :pup_bio, null: false 
      t.timestamps
    end
  end
end
