class AddPup < ActiveRecord::Migration[5.2]
  def change
    add_column :pups, :house_trained, :string
    add_column :pups, :special_needs, :string
    add_column :pups, :activity_level, :string
    add_column :pups, :good_with_other_dogs, :string
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
