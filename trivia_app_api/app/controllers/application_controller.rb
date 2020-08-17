class ApplicationController < ActionController::API

    def encode_token(payload)
        JWT.encode(payload, "triviaRPG", "HS256")
    end

   
end
