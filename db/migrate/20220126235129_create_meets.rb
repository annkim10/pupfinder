class CreateMeets < ActiveRecord::Migration[5.2]
  def change
    create_table :meets do |t|
      t.integer :pup_id, null: false 
      t.integer :user_id, null: false 
      t.integer :org_id, null: false 
      t.string :date, null: false 
      t.string :type, null: false
      t.string :start_time, null: false 
      t.string :end_time, null: false
      t.timestamps
    end
  end
end
