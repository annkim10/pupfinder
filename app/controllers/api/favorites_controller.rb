class Api::FavoritesController < ApplicationController

    def create 
        @favorite = Favorite.new(fav_params)
        # @favorite.user_id = current_user.id
        # @favorite.pup_id = Pup.find(params[:pup_id])
        if @favorite.save
            render :show 
        else 
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        if @favorite.destroy
            render :show 
        else
            render ["Error"]
        end
    end

    private 

    def fav_params 
        params.require(:favorite).permit(:user_id, :pup_id)
    end

end
