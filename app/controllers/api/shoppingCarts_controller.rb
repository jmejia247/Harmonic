class Api::ShoppingCartsController < ApplicationController

    def show
        @shoppingCart = ShoppingCarts.find_by(id: params[:id])
        render :show
    end

    def create
        # debugger
        @shoppingCart = ShoppingCart.new(shoppingCart_params)

        if @shoppingCart.save
            render :show
        else
            render json: @shoppingCart.errors.full_messages, status: 422
        end
    end

    # def update
    #     @shoppingCart = ShoppingCarts.find_by(id: params[:id])
    #     if @shoppingCart && @shoppingCart.update(shoppingCart_params)
    #         render :show
    #     else
    #         render json: @shoppingCart.errors.full_messages, status: 422
    #     end
    # end
    
    def destroy
        debugger
        @shoppingCart = ShoppingCarts.find_by(id: params[:id])
        @shoppingCartItem = @shoppingCart.map()
        if @shoppingCartItem
            @shoppingCartItem.destroy
            render :show
        else
            render json: {error: 'item could not be found'}
        end
    end

    private

    def shoppingCart_params 
        params.require(:shoppingCart).permit(:user_id, :listing_id)
    end

end