require 'nokogiri'
require 'open-uri'
require 'pry'

class SpacecoastlaunchesScraper

    def get_page
        Nokogiri::HTML(open("https://spacecoastlaunches.com/launch-list/"))
    end

    def scrape
        self.get_page.css(".et_pb_text_1")
    end

    def create_launches_list
        launches = []

        self.scrape.each do |launch_posts|
            date = launch_posts.children.children.children[2].text
            rocket = launch_posts.children.children.children[4].text
            mission = launch_posts.children.children.children[6].text
            site = launch_posts.children.children.children[8].text
            time = launch_posts.children.children.children[10].text.strip
            
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
# ruby app/controllers/concerns/spacecoastlaunches_scraper.rb
# SpacecoastlaunchesScraper.new.make_launches