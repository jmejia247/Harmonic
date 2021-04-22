Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do 
      resources :carts, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show] do 
      resources :reviews, only: [:create, :update]
    end
    resources :reviews, only: [:index, :show, :destroy]
    resources :search, only: [:index]
    resources :carts, only: [:create, :destroy]
  end

  root 'static_pages#root'
end
