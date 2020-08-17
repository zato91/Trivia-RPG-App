class UsersController < ApplicationController
    
    def index
        users = User.all
        render json: users
    end 
  
    def create
        user = User.new(user_params)

        if user.valid?
            user.save
            render json: {user: UserSerializer.new(user), token: encode_token({user_id: user.id})}
        else
            render json: {error: "Failed to create the user"}
        end
    end

    def login
        byebug
        user = User.find_by(username: params[:username])
    
            if user && user.authenticate(params[:password])
                render json: {user: UserSerializer.new(user), token: encode_token({user_id: user.id})}
            else
                render json: {error: "Invalid username or Password"}
            end
       end 
    

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
