Rails.application.routes.draw do
  resources :powersets
  resources :powers
  resources :characters, only: [:index, :create]
  resources :users

  post "/login", to: "auth#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
