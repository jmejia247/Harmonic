class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            @reviews = Review.where(listing_id: review_params[:listing_id])
            render :index
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review && @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @review = Review.find_by(id: params[:id])
        if @review
            @review.destroy
            render :show
        else
            render json: {error: 'review could not be found'}
        end
    end

    private

    def review_params 
        params.require(:review).permit(:title, :content, :author_id, :listing_id, :rating, :email)
    end

end
