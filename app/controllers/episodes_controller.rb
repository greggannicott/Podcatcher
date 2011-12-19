class EpisodesController < ApplicationController
  def index
    @episodes = Episode.all
  end

  def show
    @episode = Episode.find(params[:id])
  end

  def update
    # Currently hardcoded to just update the current time. Will be changed
    # later to service other puproses.
    @episode = Episode.find(params[:id])
    @episode.update_attributes(:current_time => params[:current_time])
    @episode.save
    render :nothing => true
    # No response given for now as this is a quick test and uses Ajax.
  end

end
