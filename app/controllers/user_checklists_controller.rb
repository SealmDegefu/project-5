class UserChecklistsController < ApplicationController

	def index
		checklist = Checklist.all
		render json: checklist 
	end 

	def show
		user_checklist = UserChecklist.find_by(id: params[:id])
		if user_checklist
			render json: user_checklist
		else
			render json: { error: "Checklist not found" }, status: :not_found
		end 
	end 
end
