class CatsController < ApplicationController
  before_action :set_cat, only: [:show, :update, :destroy]

  # GET /cats
  def index
    @cats = Cat.all

    render json: @cats
  end

  # GET /cats/1
  def show
    render json: @cat
  end

  # POST /cats
  def create
    @cat = Cat.new(cat_params)

    if @cat.save
      render json: @cat, status: :created, location: @cat
    else
      render json: @cat.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cats/1
  def update
    if @cat.update(cat_params)
      render json: @cat
    else
      render json: @cat.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cats/1
  def destroy
    @cat.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cat
      @cat = Cat.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def cat_params
      params.require(:cat).permit(:name, :breed, :age, :gender, :size, :color, :image_url, :spayed_neutered, :declawed, :housetrained, :description, :good_with_dogs, :good_with_cats, :good_with_kids, :location_name, :location_address, :intake_date, :adoption_price, :references)
    end
end
