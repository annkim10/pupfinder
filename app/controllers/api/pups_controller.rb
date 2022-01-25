class Api::PupsController < ApplicationController

    def index 
        @pups = Pup.all
        render :index
    end

    def show 
        @pup = Pup.with_attached_photos.find(params[:id])
        render :show
    end


end
