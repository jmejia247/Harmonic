class Api::CartsController < ApplicationController

    def index
        @carts = Cart.where(user_id: current_user.id)
        render :index
    end

    def create
        @cart = Cart.new(cart_params)

        if @cart.save
            @carts = Cart.where(user_id: current_user.id)
            render :index
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end
    
    def destroy
        # debugger
        @cart = Cart.where(user_id: current_user.id).where(listing_id: cart_params[:listing_id])
        if @cart
            @cart[0].destroy
            @carts = Cart.where(user_id: current_user.id)
            render :index
        else
            render json: {error: 'item could not be found'}
        end
    end

    private

    def cart_params 
        params.require(:cart).permit(:user_id, :listing_id)
    end

end