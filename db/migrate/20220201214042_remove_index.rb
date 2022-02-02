class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :preferences, name: "index_preferences_on_user_id"
  end
end
