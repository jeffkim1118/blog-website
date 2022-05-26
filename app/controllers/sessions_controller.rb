class SessionsController < ApplicationController
  def create
      user = User.find_by(username: params[:username])
      if user && user.authenticate(params[:password])
        cookies[:user_id] ||= user.id
        session[:user_id] ||= user.id
        render json: user, status: :created
      else
        render json: {error: {login: "invalid username or password"}}, status: :unauthorized
      end
  end

  def destroy
      session.delete :user_id
      head :no_content
  end
end
