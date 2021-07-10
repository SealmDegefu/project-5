class SessionsController < ApplicationController

	skip_before_action :verify_authenticity_token
	
	skip_before_action :authorize
	
	def create
	  user = User.find_by(username: params[:username])
	  if user&.authenticate(params[:password])
		session[:user_id] = user.id
		render json: user
	  else
		render json: { errors: ["Invalid username or password"] }, status: :unauthorized
	  end
	end

	def omniauth
		@user = User.from_omniauth(auth)
		@user.save
		session[:user_id] = @user.id
		redirect_to home_path
	  end

	def destroy
	  session.delete :user_id
	  head :no_content
	end

    private
    def auth
        request.env['omniauth.auth']
    end


end
