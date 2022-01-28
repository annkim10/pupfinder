# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  zipcode         :string           not null
#  email           :string           not null
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    attr_reader :password 
    validates :first_name, :last_name, :zipcode, presence: true 
    validates :email, :session_token, presence: true, uniqueness: true 
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token

    has_one_attached :photo

    has_many :meets,
    foreign_key: :user_id, 
    class_name: :Meet 


    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        return nil unless @user
        @user.is_password?(password) ? @user : nil 
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::base64
        self.save!
        self.session_token
    end

    private 

    def ensure_session_token 
        self.session_token ||= SecureRandom::base64
    end

end
