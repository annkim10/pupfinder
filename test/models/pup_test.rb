# == Schema Information
#
# Table name: pups
#  id                   :bigint           not null, primary key
#  org_id               :integer          not null
#  pup_name             :string           not null
#  pup_breed            :string           not null
#  pup_size             :string           not null
#  pup_gender           :string           not null
#  pup_age              :string           not null
#  pup_bio              :text             not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  house_trained        :string
#  special_needs        :string
#  activity_level       :string
#  good_with_other_dogs :string
#
require 'test_helper'

class PupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
