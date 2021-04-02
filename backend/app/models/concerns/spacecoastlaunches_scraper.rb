require 'nokogiri'
require 'open-uri'
require 'pry'

URL = 'https://spacecoastlaunches.com/launch-list/'

class SpacecoastlaunchesScraper

    def get_page
        Nokogiri::HTML(open(URL))
    end

    def scrape
        doc = self.get_page.css(".et_pb_text_1").css(".et_column_last")
    end

    def create_launches_list
        launches = []

        self.scrape.each do |launch|
            date = launch.css("p")[0].children[1].text.strip
            rocket = launch.css("p")[1].children[1].text.strip
            mission = launch.css("p")[2].children[1].text.strip
            site = launch.css("p")[3].children[1].text.strip
            time = launch.css("p")[4].children[1].text.strip

            launch_info = {
                date: date,
                rocket: rocket,
                mission: mission,
                site: site,
                time: time
            }

            launches << launch_info
        end
        launches
    end
end

SpacecoastlaunchesScraper.new.create_launches_list
# ruby app/models/concerns/spacecoastlaunches_scraper.rb
    # Shift+Q to quit
    # exit! to exit
