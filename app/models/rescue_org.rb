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
class RescueOrg < ApplicationRecord

    validates :org_name, :org_address, :org_email, :org_phone, :org_website, :org_bio, presence: true

    has_many :pups,
    primary_key: :id,
    foreign_key: :org_id,
    class_name: :Pup

end
