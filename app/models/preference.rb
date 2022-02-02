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

    validates :user_id, presence: true
    validates :age_pref, presence: true, inclusion: { in: %w(No\ Preference Puppy Adult Senior)}
    validates :size_pref, presence: true, inclusion: { in: %w(No\ Preference Small Medium Large)}
    validates :gender_pref, presence: true, inclusion: { in: %w(No\ Preference Female Male) }
    validates :activity_pref, presence: true, inclusion: { in: %w(No\ Preference Active Very\ Active Laid-back) }
    validates :special_needs_pref, presence: true, inclusion: { in: %w(No\ Preference Open Not\ Open) }
    validates :house_trained_pref, presence: true, inclusion: { in: %w(No\ Preference Yes No) }
    validates :good_with_dogs_pref, presence: true, inclusion: { in: %w(No\ Preference Yes No) }

    belongs_to :user, 
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: :User

end

