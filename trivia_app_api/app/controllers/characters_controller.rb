class CharactersController < ApplicationController

    def index 
        
        characters = Character.all
        render json: characters , :include => :powers
    end

    def show 
        characters  = Character.find(params[:id])
        render json: character
    end
end
