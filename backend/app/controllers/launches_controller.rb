class LaunchesController < ApplicationController
    
    def index
        launches = Launch.all
        render json: launches
    end

    def show
        launch = Launch.find(params[:id])
        render json: launch
    end

    def create
        launch = Launch.create(launch_params)
        render json: launch.save ? launch : {message: launch.errors.messages[0]}
    end

    def update
        launch = Launch.find(params[:id])
        launch = launch.update(launch_params)
        render json: launch
    end

    def destroy
        launch = List.find(params[:id])
        launch.destroy
    end

    private
    def launch_params
        params.require(:lauch).permit(:date, :time, :rocket, :site, :mission)
    end
end
