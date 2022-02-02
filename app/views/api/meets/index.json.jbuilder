@meets.each do |meet|
    json.set! meet.id do 
        json.extract! meet, :id, :pup_id, :user_id, :org_id, :date, :meeting_type, :start_time, :end_time
    end
end
