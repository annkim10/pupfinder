# == Schema Information
#
# Table name: preferences
#
#  id                  :bigint           not null, primary key
#  user_id             :integer          not null
#  age_pref            :string           not null
#  size_pref           :string           not null
#  gender_pref         :string           not null
#  activity_pref       :string           not null
#  special_needs_pref  :string           not null
#  house_trained_pref  :string           not null
#  good_with_dogs_pref :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class Preference < ApplicationRecord


    validates :user_id, :age_pref, :size_pref, :gender_pref, :activity_pref, :special_needs_pref, :house_trained_pref, :good_with_dogs_pref, presence: true 

    belongs_to :user, 
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: :User

end

