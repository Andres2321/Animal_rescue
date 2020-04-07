# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_07_171254) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "animals", force: :cascade do |t|
    t.string "species"
    t.string "name"
    t.string "breed"
    t.integer "age"
    t.string "gender"
    t.string "size"
    t.string "color"
    t.string "image_url"
    t.string "spayed_neutered"
    t.string "declawed"
    t.string "housetrained"
    t.string "description"
    t.string "good_with_dogs"
    t.string "good_with_cats"
    t.string "good_with_kids"
    t.string "location_name"
    t.string "location_address"
    t.string "intake_date"
    t.integer "adoption_price"
    t.bigint "user_id", null: false
    t.bigint "like_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["like_id"], name: "index_animals_on_like_id"
    t.index ["user_id"], name: "index_animals_on_user_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "likes"
    t.string "comments"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.boolean "is_admin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "animals", "likes"
  add_foreign_key "animals", "users"
end
