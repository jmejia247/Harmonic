class Api::ListingsController < ApplicationController

    def index 
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end

    private

    def listing_params
        params.require(:listing).permit(:title, :brand, :model, :price, :description)
    end

end
