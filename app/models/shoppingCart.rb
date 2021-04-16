class ShoppingCart < ApplicationRecord

    has_many :listings,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
        
end