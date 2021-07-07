class UserChecklistItemsController < ApplicationController
	skip_before_action :verify_authenticity_token

	def index
		checklist_item = UserChecklistItem.all
		render json: checklist_item
	end 

	def destroy 
		checklist_item = UserChecklistItem.find(params[:id])
		checklist_item.destroy
		head :no_content
	end

	def update
		# byebug
		user_checklist_items = UserChecklistItem.find_by(id: params[:id])
		if user_checklist_items
			user_checklist_items.update(user_checklist_items_params)
			render json: user_checklist_items
		else
			render json: { error: "User Checklist Item not found" }, status: :not_found
		end
	end 

	private
	def user_checklist_items_params
		params.permit(:list, :isCompleted, :user_checklist_id)
	end 

end
