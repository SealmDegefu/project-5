class UsersController < ApplicationController
	skip_before_action :verify_authenticity_token

	skip_before_action :authorize, only: :create

	def create
	  user = User.create!(user_params)
	  session[:user_id] = user.id
	  if user 
		Checklist.all.each do |checklist| 
			userchecklist = UserChecklist.create(user_id: user.id, image_url: checklist.image_url, checklist_id: checklist.id, name: checklist.name, description: checklist.description) 
			checklist.checklist_items.each { |item| UserChecklistItem.create!(list: item.list, isCompleted: false, user_checklist_id: checklist.id) } 
		end 
	    render json: user, status: :created
		end 
	end
  
	def self.from_omniauth(auth)
		where(email: auth.info.email).first_or_initialize do |user|
		  user.user_name = auth.info.name
		  user.email = auth.info.email
		  user.password = SecureRandom.hex
		end
	  end

	def show
	  render json: @current_user 
	end

  
	private
  
	def user_params
	  params.permit(:username, :password, :password_confirmation, :wedding_date, :zipcode)
	end

	# def user_checklists_params
	# 	params.permit(:notes, :checklist_id, :user_id)
	# end 

	# def item_params
	# 	params.permit(:list, :isCompleted, :user_checklist_id)
	# end 
		
end
