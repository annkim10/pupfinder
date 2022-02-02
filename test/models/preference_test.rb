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
require 'test_helper'

class PreferenceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
