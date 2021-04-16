json.listings do
    @listings.each do |listing| 
        json.set! listing.id do 
            json.partial! listing
        end
    end
end