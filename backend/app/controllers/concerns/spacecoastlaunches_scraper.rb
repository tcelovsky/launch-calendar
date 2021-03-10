require 'nokogiri'
require 'open-uri'
require 'pry'

module SpacecoastlaunchesScraper
    def get_page
        @html = Nokogiri::HTML(open("https://spacecoastlaunches.com/launch-list/"))
    end

    def scrape
        @doc = self.get_page.css(".et_pb_text")
        # @launches = @doc.css(".three_fourth")
        # date = @doc.css("p")[0].text
        # rocket = @doc.css("p")[1].text
        # mission = @doc.css("p")[2].text
        # site = @doc.css("p")[3].text
        # time = @doc.css("p")[4].text
        # binding.pry
    end

    def make_launches
        self.scrape.each do |post|
            launch = Launch.new
            launch.date = post.css(".three_fourth").css(".sc-launch__title--secondary")[0].text
            launch.rocket = post.css(".three_fourth").css(".sc-launch__title--secondary")[1].text
            # launch.mission = post.css(".three_fourth").css("p")[2].text
            # launch.site = post.css(".three_fourth").css("p")[3].text
            # launch.time = post.css(".three_fourth").css("p")[4].text
            launch.save
        end
    end

end
# ruby app/controllers/concerns/spacecoastlaunches_scraper.rb
# SpacecoastlaunchesScraper.new.make_launches