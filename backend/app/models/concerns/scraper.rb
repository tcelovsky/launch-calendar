require 'nokogiri'
require 'open-uri'
require 'pry'

URL = 'https://www.kennedyspacecenter.com/launches-and-events/events-calendar?pageindex=1&categories=Rocket%20Launches'

class Scraper

    def get_page
        Nokogiri::HTML(open(URL))
    end

    def scrape
        doc = self.get_page.css("#maincontent").css(".event-calender-container").css(".event-calender-container-inner")

#maincontent > div.event-calender-container > div.event-calender-container-inner > div > div.event-list-view-outercontainer > div.event-list-view-container.clearfix
        
        binding.pry
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

# Scraper.new.create_launches_list
# ruby app/models/concerns/scraper.rb
