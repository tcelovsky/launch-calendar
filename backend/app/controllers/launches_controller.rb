class LaunchesController < ApplicationController
    before_action :find_launch, only: [:show, :update, :destroy]
    
    def index
        launches = Launch.all
        render json: launches
    end

    def show
        render json: launch
    end

    def create
        launch = Launch.create(launch_params)
        render json: launch.save ? launch : {message: launch.errors.messages[0]}
    end

    def update
        launch = launch.update(launch_params)
        render json: launch
    end

    def destroy
        launch.destroy
    end

    private
    def launch_params
        params.require(:lauch).permit(:date, :time, :rocket, :site, :mission)
    end

    def find_launch
        launch = List.find(params[:id])
    end
end
