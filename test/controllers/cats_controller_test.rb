require 'test_helper'

class CatsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cat = cats(:one)
  end

  test "should get index" do
    get cats_url, as: :json
    assert_response :success
  end

  test "should create cat" do
    assert_difference('Cat.count') do
      post cats_url, params: { cat: { adoption_price: @cat.adoption_price, age: @cat.age, breed: @cat.breed, color: @cat.color, declawed: @cat.declawed, description: @cat.description, gender: @cat.gender, good_with_cats: @cat.good_with_cats, good_with_dogs: @cat.good_with_dogs, good_with_kids: @cat.good_with_kids, housetrained: @cat.housetrained, image_url: @cat.image_url, intake_date: @cat.intake_date, location_address: @cat.location_address, location_name: @cat.location_name, name: @cat.name, references: @cat.references, size: @cat.size, spayed_neutered: @cat.spayed_neutered } }, as: :json
    end

    assert_response 201
  end

  test "should show cat" do
    get cat_url(@cat), as: :json
    assert_response :success
  end

  test "should update cat" do
    patch cat_url(@cat), params: { cat: { adoption_price: @cat.adoption_price, age: @cat.age, breed: @cat.breed, color: @cat.color, declawed: @cat.declawed, description: @cat.description, gender: @cat.gender, good_with_cats: @cat.good_with_cats, good_with_dogs: @cat.good_with_dogs, good_with_kids: @cat.good_with_kids, housetrained: @cat.housetrained, image_url: @cat.image_url, intake_date: @cat.intake_date, location_address: @cat.location_address, location_name: @cat.location_name, name: @cat.name, references: @cat.references, size: @cat.size, spayed_neutered: @cat.spayed_neutered } }, as: :json
    assert_response 200
  end

  test "should destroy cat" do
    assert_difference('Cat.count', -1) do
      delete cat_url(@cat), as: :json
    end

    assert_response 204
  end
end
