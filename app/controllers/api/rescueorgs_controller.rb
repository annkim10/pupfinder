class Api::RescueorgsController < ApplicationController

    def index 
        @rescues = RescueOrg.all
        render :index
    end

    def show 
        @rescue = RescueOrg.with_attached_photo.find(params[:id])
        render :show
    end

end
