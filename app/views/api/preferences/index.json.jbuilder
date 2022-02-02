@preferences.each do |preference|
    json.set! preference.id do
        json.extract! preference, :id, :user_id, :age_pref, :size_pref, :gender_pref, :activity_pref, :special_needs_pref, :house_trained_pref, :good_with_dogs_pref
    end
end
