class Api::PreferencesController < ApplicationController

    def create 
        @preference = Preference.new(pref_params)
        if @preference.save 
            render :show
        else 
            render json: @preference.errors.full_messages, status: 422
        end
    end

    def index 
        @preferences = Preference.all
    end

    private 

    def pref_params 
        params.require(:preferences).permit(:user_id, :age_pref, :size_pref, :gender_pref, :activity_pref, :special_needs_pref, :house_trained_pref, :good_with_dogs_pref)
    end

end
