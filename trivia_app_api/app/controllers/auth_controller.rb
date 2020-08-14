class Authcontroller < ApplicationController
    # skip_before_action :logged_in?, only: [:create] #login

   def create
    byebug
    user = User.find_by(username: params[:username])

        if user && user.authenticate(params[:password])
            render json: {user: UserSerializer.new(user), token: encode_token({user_id: user.id})}
        else
            render json: {error: "Invalid username or Password"}
        end
   end 

end
