# == Schema Information
#
# Table name: meets
#
#  id           :bigint           not null, primary key
#  pup_id       :integer          not null
#  user_id      :integer          not null
#  org_id       :integer          not null
#  date         :string           not null
#  meeting_type :string           not null
#  start_time   :string           not null
#  end_time     :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require 'test_helper'

class MeetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
