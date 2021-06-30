class ChecklistItemsController < ApplicationController

	def index 
		checklist_item = ChecklistItem.all
		render json: checklist_item 
	end 
end
