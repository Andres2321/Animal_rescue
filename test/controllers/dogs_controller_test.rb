require 'test_helper'

class DogsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dog = dogs(:one)
  end

  test "should get index" do
    get dogs_url, as: :json
    assert_response :success
  end

  test "should create dog" do
    assert_difference('Dog.count') do
      post dogs_url, params: { dog: { adoption_price: @dog.adoption_price, age: @dog.age, breed: @dog.breed, color: @dog.color, description: @dog.description, gender: @dog.gender, good_with_cats: @dog.good_with_cats, good_with_dogs: @dog.good_with_dogs, good_with_kids: @dog.good_with_kids, housetrained: @dog.housetrained, image_url: @dog.image_url, intake_date: @dog.intake_date, location_address: @dog.location_address, location_name: @dog.location_name, name: @dog.name, size: @dog.size, spayed_neutered: @dog.spayed_neutered } }, as: :json
    end

    assert_response 201
  end

  test "should show dog" do
    get dog_url(@dog), as: :json
    assert_response :success
  end

  test "should update dog" do
    patch dog_url(@dog), params: { dog: { adoption_price: @dog.adoption_price, age: @dog.age, breed: @dog.breed, color: @dog.color, description: @dog.description, gender: @dog.gender, good_with_cats: @dog.good_with_cats, good_with_dogs: @dog.good_with_dogs, good_with_kids: @dog.good_with_kids, housetrained: @dog.housetrained, image_url: @dog.image_url, intake_date: @dog.intake_date, location_address: @dog.location_address, location_name: @dog.location_name, name: @dog.name, size: @dog.size, spayed_neutered: @dog.spayed_neutered } }, as: :json
    assert_response 200
  end

  test "should destroy dog" do
    assert_difference('Dog.count', -1) do
      delete dog_url(@dog), as: :json
    end

    assert_response 204
  end
end
