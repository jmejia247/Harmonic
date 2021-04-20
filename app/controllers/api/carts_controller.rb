class Api::CartsController < ApplicationController

    def show
        @cart = Carts.find_by(id: cart_params[:user_id])
        render :show
    end

    def create
        # debugger
        @cart = Cart.new(cart_params)

        if @cart.save
            render :index
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end

    # def update
    #     @cart = carts.find_by(id: params[:id])
    #     if @cart && @cart.update(cart_params)
    #         render :show
    #     else
    #         render json: @cart.errors.full_messages, status: 422
    #     end
    # end
    
    def destroy
        # debugger
        # @cart = carts.find_by(id: params[:id])
        # @cartItem = @cart.map()
        @cart = Cart.where(id: cart_params[:user_id]).where(listing_id: cart_params[:listing_id])
        if @cart
            @cart.destroy
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