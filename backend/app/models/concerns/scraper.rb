require 'nokogiri'
require 'open-uri'
require 'pry'

URL = 'https://spaceflightnow.com/launch-schedule/'

class Scraper
    @@dates =[]
    @@times = []
    @@sites = []
    @@rockets = []
    @@missions = []

    def get_page
        Nokogiri::HTML(open(URL))
    end

    def scrape
        doc ||= self.get_page.css(".entry-content")
    end

    def get_launches_list
        doc = self.scrape

        doc.css(".launchdate").each do |i|
            date = i.children[0].text.strip
            @@dates << date
        end

        doc.css(".missiondata").each do |i|
            time_a = i.children[1].text
            if time_a.strip == "TBD"
                time = time_a.strip
            else time = time_a[/\((.*?)\)/, 1]
            end
            @@times << time
        end

        doc.css(".missiondata").each do |i|
            if i.children[3].text.strip == ")"
                site = i.children[5].text.strip
            else site = i.children[3].text.strip
            end
            @@sites << site
        end

        doc.css(".mission").each do |i|
            rocket = i.children[0].text.strip
            clean_rocket = rocket[/[^•]+/].strip 
            @@rockets << clean_rocket
        end

        doc.css(".missdescrip").each do |i|
            mission = i.children[0].text.strip
            clean_mission = mission[/[^\[]+/].strip
            @@missions << clean_mission
        end
    end

    def create_launches_list
        self.get_launches_list
        launches = []

        i = 0
        while i < @@dates.length do
            launch_info = {}
        
            launch_info.store(:date, @@dates[i])
            launch_info.store(:time, @@times[i])
            launch_info.store(:site, @@sites[i])
            launch_info.store(:rocket, @@rockets[i])
            launch_info.store(:mission, @@missions[i])

            launches << launch_info

            i += 1
        end 
        launches
    end
end

Scraper.new.create_launches_list
# ruby app/models/concerns/scraper.rb
    # Shift+Q to quit
    # exit! to exit
