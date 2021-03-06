Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'staticpages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show] do 
      resources :meets 
      resources :favorites, only: [:index]
    end

    resources :preferences, only: [:create, :update, :show, :index]

    resources :favorites, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]

    resources :pups, only: [:index, :show] do 
      collection do
        get :filter, to: "pups#filter", as: "filter"
      end
    end

    resources :rescueorgs, only: [:index, :show]
  end

end
