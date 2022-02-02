class CreatePreferences < ActiveRecord::Migration[5.2]
  def change
    create_table :preferences do |t|
      t.integer :user_id, null: false
      t.string :age_pref, null: false 
      t.string :size_pref, null: false 
      t.string :gender_pref, null: false 
      t.string :activity_pref, null: false 
      t.string :special_needs_pref, null: false
      t.string :house_trained_pref, null: false
      t.string :good_with_dogs_pref, null: false 
      t.timestamps
    end

    add_index :preferences, :user_id, :unique =>  true
    #Ex:- add_index("admin_users", "username")

  end
end
