class Listing < ApplicationRecord
    validates :title, :brand, :model, :description, :price, presence: true

    has_one_attached :photo

    has_many :reviews,
        foreign_key: :listing_id,
        class_name: :Review

    belongs_to :shoppingCart, 
        foreign_key: :listing_id,
        class_name: :ShoppingCart

end
