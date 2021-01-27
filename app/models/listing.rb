class Listing < ApplicationRecord
    validates :title, :brand, :model, :description, :price, presence: true

    has_one_attached :photo
end
