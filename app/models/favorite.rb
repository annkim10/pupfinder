# == Schema Information
#
# Table name: favorites
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  pup_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Favorite < ApplicationRecord
    validates :user_id, :pup_id, presence: true 

    belongs_to :user, 
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: :User 

    belongs_to :pup, 
    primary_key: :id, 
    foreign_key: :pup_id,
    class_name: :Pup

end
