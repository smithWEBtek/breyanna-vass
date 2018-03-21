Rails.application.routes.draw do
  
  get 'pictures/new'

  get 'pictures/show'

  root 'static_pages#home'
  resources :appointments

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
