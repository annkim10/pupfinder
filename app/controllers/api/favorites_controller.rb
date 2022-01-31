class Api::FavoritesController < ApplicationController

    def index 
        if params[:user_id]
            @favorites = Favorite.where(user_id: params[:user_id] )
        end
        render :index
    end

    def create 
        @favorite = Favorite.new(fav_params)
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
