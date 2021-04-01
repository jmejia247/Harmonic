@listings.each do |listing|
    json.set! listing.id do 
        json.extract! listing, :id, :title, :model, :brand, :price, :description, :photo
        json.photoUrl url_for(listing.photo)
    end
end
