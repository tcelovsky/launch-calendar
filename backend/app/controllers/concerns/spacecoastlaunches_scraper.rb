require 'open-uri'

module SpacecoastlaunchesScraper
    def scrape
    html ||= open("https://spacecoastlaunches.com/launch-list/")
    res = Nokogiri::HTML(html)
    end
    
end