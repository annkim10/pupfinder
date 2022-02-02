class Api::PupsController < ApplicationController

    def index 
        @pups = Pup.all
        render :index
    end

    def show 
        @pup = Pup.with_attached_photos.find(params[:id])
        render :show
    end

    def filter
        query = params[:filter] 
        @pups = Pup.where({pup_age: filter})
        render :index
    end


end
