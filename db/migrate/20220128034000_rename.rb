class Rename < ActiveRecord::Migration[5.2]
  def change
    rename_column :meets, :type, :meeting_type
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
