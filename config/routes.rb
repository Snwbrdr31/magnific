Rails.application.routes.draw do

  # Root Route
  root 'home#index'

  namespace :api do
    get 'specsheets/index'
  end

  
  # React Router - NO ROUTES BELOW THIS!
  get '*unmatched_route', to: 'home#index'
end
