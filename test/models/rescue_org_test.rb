# == Schema Information
#
# Table name: rescue_orgs
#
#  id          :bigint           not null, primary key
#  org_name    :string           not null
#  org_address :string           not null
#  org_email   :string           not null
#  org_phone   :string           not null
#  org_website :string           not null
#  org_bio     :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class RescueOrgTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
