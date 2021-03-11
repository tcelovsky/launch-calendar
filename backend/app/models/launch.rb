class Launch < ApplicationRecord   
    include SpacecoastlaunchesScraper 
    
    def make_launches
        SpacecoastlaunchesScraper.scrape.each do |posts|
            date = posts.children.children.children[2].text
            rocket = posts.children.children.children[4].text
            mission = posts.children.children.children[6].text
            site = posts.children.children.children[8].text
            time = posts.children.children.children[10].text.strip
            launch = Launch.create(date: date, rocket: rocket, mission: mission, site: site, time: time)
            # launch = Launch.new
            # launch.date = posts.children.children.children[2].text
            # launch.rocket = posts.children.children.children[4].text
            # launch.mission = posts.children.children.children[6].text
            # launch.site = posts.children.children.children[8].text
            # launch.time = posts.children.children.children[10].text.strip
            # launch.save
        end
    end
end
