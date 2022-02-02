class AddIndexFavs < ActiveRecord::Migration[5.2]
  def change
    add_index :favorites, [:user_id, :pup_id], unique: true 
  end
end
