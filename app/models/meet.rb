# == Schema Information
#
# Table name: meets
#
#  id         :bigint           not null, primary key
#  pup_id     :integer          not null
#  user_id    :integer          not null
#  org_id     :integer          not null
#  date       :string           not null
#  type       :string           not null
#  start_time :string           not null
#  end_time   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Meet < ApplicationRecord

    validates :pup_id, :user_id, :org_id, :date, :type, :start_time, :end_time, presence: true 

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User 

    belongs_to :pup, 
    foreign_key: :pup_id, 
    class_name: :Pup

    

end