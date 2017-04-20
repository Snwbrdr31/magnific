Rails.application.routes.draw do
  namespace :api do
    get 'specsheets/index'
  end

  namespace :api do
    get 'specsheets/show'
  end

  # Root Route
  root 'home#index'

  # React Router - NO ROUTES BELOW THIS!
  get '*unmatched_route', to: 'home#index'
end
