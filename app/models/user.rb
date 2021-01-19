class User < ApplicationRecord

    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(email, password)

    end

    def password=(password)

    end

    def is_password?(password)

    end

    def reset_session_token!

    end

    private

    def ensure_session_token 

    end

    def generate_unique_session_token

    end

end
