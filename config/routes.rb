Rails.application.routes.draw do
  get '/', to: 'dreams#index', as: 'dreams_index'
  get '/search_dreams', to: 'dreams#search_dreams', as: 'search_dreams'
  get '/display_dream', to: 'dreams#display_dream', as: 'display_dream'
end
