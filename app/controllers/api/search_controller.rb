class Api::SearchController < ApplicationController

    def index 
        if search_params[:query].length > 0
            @listings = Listing.select('listings.*').where("LOWER(listings.title) LIKE ? ", "%#{search_params[:query].downcase}%").or(Listing.select('listings.*').where("LOWER(listings.model) LIKE ? ", "%#{search_params[:query].downcase}%")).or(Listing.select('listings.*').where("LOWER(listings.brand) LIKE ? ", "%#{search_params[:query].downcase}%"))
                          .limit(4)
        end
        render :index
    end
    private

    def search_params
        params.require(:search).permit(:query)
    end

end