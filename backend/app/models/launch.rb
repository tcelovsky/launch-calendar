class Launch < ApplicationRecord   
    def self.create_from_collection(launches)
        launches.each do |launch_hash|
            Launch.create(launch_hash)
        end
    end
end
