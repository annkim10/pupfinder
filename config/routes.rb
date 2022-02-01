Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'staticpages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show] do 
      resources :meets 
      resources :favorites, only: [:index]
    end

    resources :preferences, only: [:create, :update, :show]

    resources :favorites, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]

    resources :pups, only: [:index, :show]

    resources :rescueorgs, only: [:index, :show]
  end

end
