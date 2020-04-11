class AnimalsController < ApplicationController
  before_action :set_animal, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show]

  # GET /animals
  def index
    @animals = Animal.all

    render json: @animals, include: :likes
  end

  # GET /animals/1
  def show
    render json: @animal, include: :likes
  end

  # POST /animals
  def create
    @animal = Animal.new(animal_params)

    if @animal.save
      render json: @animal, status: :created, location: @animal
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /animals/1
  def update
    if @animal.update(animal_params)
      render json: @animal
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /animals/1
  def destroy
    @animal.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_animal
      @animal = Animal.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def animal_params
      params.require(:animal).permit(:species, :name, :breed, :age, :gender, :size, :color, :image_url, :spayed_neutered, :declawed, :housetrained, :description, :good_with_dogs, :good_with_cats, :good_with_kids, :location_name, :location_address, :intake_date, :adoption_price)
    end
end
