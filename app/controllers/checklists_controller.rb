class ChecklistsController < ApplicationController

	def index 
		checklists = Checklist.all
		render json: checklists
	end

	def show
		checklist = Checklist.find_by(id: params[:id])
		if checklist
			render json: checklist
		else
			render json: { error: "Checklist not found" }, status: :not_found
		end 
	end 
end
