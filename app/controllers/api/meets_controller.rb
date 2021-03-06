class Api::MeetsController < ApplicationController

    def create   
        @meet = Meet.new(meet_params)
        if @meet.save 
            render :show
        else 
            render json: @meet.errors.full_messages, status: 422
        end
    end

    def show 
        @meet = Meet.find(params[:id])
    end

    def destroy 
        @meet = Meet.find_by(id: params[:id])
        if @meet 
            @meet.destroy 
            render :show 
        else
            render ["Could not locate scheduled Meet & Greet"]
        end
    end

    def update 
         @meet = Meet.find_by(id: params[:id])
         if @meet
            @meet.update(meet_params)
            render :show 
         else
             render json: ['Please fill out all fields']
        end
    end

    def index 
        @user = User.find_by(id: params[:user_id])
        @meets = @user.meets
        render :index
    end

    private 

    def meet_params 
        params.require(:meet).permit(:user_id, :pup_id, :org_id, :date, :meeting_type, :start_time, :end_time)
    end

end
