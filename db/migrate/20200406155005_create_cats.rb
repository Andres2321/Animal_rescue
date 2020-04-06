class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :breed
      t.integer :age
      t.string :gender
      t.string :size
      t.string :color
      t.string :image_url
      t.string :spayed_neutered
      t.string :declawed
      t.string :housetrained
      t.string :description
      t.string :good_with_dogs
      t.string :good_with_cats
      t.string :good_with_kids
      t.string :location_name
      t.string :location_address
      t.string :intake_date
      t.integer :adoption_price

      t.timestamps
    end
  end
end
