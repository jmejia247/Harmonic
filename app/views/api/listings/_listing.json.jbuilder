json.extract! listing, :id, :title, :model, :brand, :price, :description, :photo, :category
json.photoUrl url_for(listing.photo)
# json.photoUrls @listing.photos.map { |file| url_for(file) }