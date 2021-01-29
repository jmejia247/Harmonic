@listings.each do |listing|
    # debugger
    json.set! listing.id do 
        # json.partial! "api/listings/listing", listing: listing
        # json.photoUrl url_for(listing.photo)
        json.extract! listing, :id, :title, :model, :brand, :price, :description, :photo
        json.photoUrl url_for(listing.photo)
        # debugger
    end
end

# json.array! @listings.each do |listing|
#   json.extract! listing, :id, :title, :model, :brand, :price, :description
#   json.photoUrl url_for(listing.photo)
# end
