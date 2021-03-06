# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_02_01_214042) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "pup_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "pup_id"], name: "index_favorites_on_user_id_and_pup_id", unique: true
  end

  create_table "meets", force: :cascade do |t|
    t.integer "pup_id", null: false
    t.integer "user_id", null: false
    t.integer "org_id", null: false
    t.string "date", null: false
    t.string "meeting_type", null: false
    t.string "start_time", null: false
    t.string "end_time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pup_id"], name: "index_meets_on_pup_id", unique: true
  end

  create_table "preferences", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "age_pref", null: false
    t.string "size_pref", null: false
    t.string "gender_pref", null: false
    t.string "activity_pref", null: false
    t.string "special_needs_pref", null: false
    t.string "house_trained_pref", null: false
    t.string "good_with_dogs_pref", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pups", force: :cascade do |t|
    t.integer "org_id", null: false
    t.string "pup_name", null: false
    t.string "pup_breed", null: false
    t.string "pup_size", null: false
    t.string "pup_gender", null: false
    t.string "pup_age", null: false
    t.text "pup_bio", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "house_trained"
    t.string "special_needs"
    t.string "activity_level"
    t.string "good_with_other_dogs"
  end

  create_table "rescue_orgs", force: :cascade do |t|
    t.string "org_name", null: false
    t.string "org_address", null: false
    t.string "org_email", null: false
    t.string "org_phone", null: false
    t.string "org_website", null: false
    t.text "org_bio", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "zipcode", null: false
    t.string "email", null: false
    t.string "password_digest"
    t.string "session_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
