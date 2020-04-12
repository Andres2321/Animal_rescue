class LikesController < ApplicationController
  before_action :authorize_request

  # POST /animals
  def create
    @like = Like.new(like_params)

    if @like.save
      render json: @like, status: :created
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end
  private
    def like_params
      params.require(:like).permit(:likes, :comments, :user_id, :animal_id)
    end
end
