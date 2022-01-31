@favorites.each do |favorite|
    json.set! favorite.id do 
        json.extract! favorite, :pup_id
    end
end