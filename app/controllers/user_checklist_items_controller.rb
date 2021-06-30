class UserChecklistItemsController < ApplicationController

	def index
		checklist_item = UserChecklistItem.all
		render json: checklist_item
	end 

	def destroy 
		checklist_item = UserChecklistItem.find(params[:id])
		checklist_item.destroy
		head :no_content
	end

end
