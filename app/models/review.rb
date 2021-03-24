class Review < ApplicationRecord

    validates :title, :content, :rating, presence: true

    belongs_to :listing, 
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :author, 
        foreign_key: :author_id,
        class_name: :User 

end
