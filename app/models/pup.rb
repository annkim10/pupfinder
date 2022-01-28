# == Schema Information
#
# Table name: pups
#
#  id         :bigint           not null, primary key
#  org_id     :integer          not null
#  pup_name   :string           not null
#  pup_breed  :string           not null
#  pup_size   :string           not null
#  pup_gender :string           not null
#  pup_age    :string           not null
#  pup_bio    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Pup < ApplicationRecord

    validates :org_id, :pup_name, :pup_breed, :pup_size, :pup_gender, :pup_age, :pup_bio, presence: true 

    belongs_to :rescue_org,
    primary_key: :id,
    foreign_key: :org_id,
    class_name: :RescueOrg
    
    has_many_attached :photos

    has_many :meets, 
    foreign_key: :pup_id, 
    class_name: :Meet

end
