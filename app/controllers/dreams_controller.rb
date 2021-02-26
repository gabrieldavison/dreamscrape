class DreamsController < ApplicationController
  protect_from_forgery except: :search_dreams
  def index
    dream_count = Dream.count()
    dream_id = rand(1..dream_count)
    @dream = Dream.find(dream_id)
  end

  # def search_dreams
  #   @dreams = Dream.where('content LIKE ?', "%#{params[:text]}%")
  #   respond_to do |format|
  #     format.js
  #     format.json { render json: @dreams.to_json }
  #   end
  # end

  # def search_dreams
  #   @dreams = Dream.where('content LIKE ?', "%#{params[:text]}%")
  #   respond_to do |format|
  #     format.js
  #     format.json do
  #       puts 'rendering html to string'
  #       render json: {
  #         dreams: render_to_string(partial: 'dreams/search_results', format: :html, layout: false, locals: { dreams: @dreams })
  #       }
  #     end
  #   end
  # end

  def search_dreams
    @dreams = Dream.where('content LIKE ?', "%#{params[:text]}%")
    render json: { html: render_to_string(partial: 'search_results') }
  end

  # def display_dream
  #   @dream = Dream.find(params[:id])
  #   respond_to do |format|
  #     format.js
  #     format.json { render json: @dream.to_json }
  #   end
  # end

  def display_dream
    @dream = Dream.find(params[:id])
    render json: { html: render_to_string(partial: 'dream') }
    # render(partial: 'dream', layout: false)
  end
end
