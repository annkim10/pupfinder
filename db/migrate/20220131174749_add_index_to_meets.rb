class AddIndexToMeets < ActiveRecord::Migration[5.2]
  def change
    add_index :meets, :pup_id, unique: true
  end
end
