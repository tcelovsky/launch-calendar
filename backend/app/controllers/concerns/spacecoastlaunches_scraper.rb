require 'nokogiri'
require 'open-uri'
require 'pry'

module SpacecoastlaunchesScraper
    def scrape
    html ||= open("https://spacecoastlaunches.com/launch-list/")
    
    doc = Nokogiri::HTML(html)

        doc.css(".sc-launch__title--secondary").each do |launch|
            launch = Launch.new
            date = launch.css.text
        end
    end

end
