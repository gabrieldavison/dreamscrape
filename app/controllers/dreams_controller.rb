class DreamsController < ApplicationController
  protect_from_forgery except: :search_dreams
  def index
    dream_count = Dream.count()
    dream_id = rand(1..dream_count)
    @dream = Dream.find(dream_id)
  end

  def search_dreams
    @dreams = Dream.limit(1000).where('content LIKE ?', "%#{params[:text]}%")
    render json: { html: render_to_string(partial: 'search_results') }
  end

  def display_dream
    @dream = Dream.find(params[:id])
    render json: { html: render_to_string(partial: 'dream') }
  end
end
