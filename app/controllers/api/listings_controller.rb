class Api::ListingsController < ApplicationController

    def index 
        @listings = Listing.all.with_attached_photo
        # debugger
        render :index
    end

    def show
        @listing = Listing.with_attached_photo.find(params[:id])
        # debugger
        render :show
    end

    private

    def listing_params
        params.require(:listing).permit(:title, :brand, :model, :price, :description, :photo)
    end

end
