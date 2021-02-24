class DreamsController < ApplicationController

  def index
    dream_count = Dream.count()
    dream_id = rand(1..dream_count)
    @dream = Dream.find(dream_id)
  end
end
