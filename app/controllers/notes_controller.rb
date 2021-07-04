class NotesController < ApplicationController
	skip_before_action :verify_authenticity_token

	def index
		notes = Note.all
		render json: notes
	end 

	def show
		note = Note.find_by(id: params[:id])
		if note
			render json: note
		else
			render json: { error: "Note not found" }, status: :not_found
		end 
	end 

	def create
		note = @current_user.notes.create!(note_params)
		render json: note, status: :created
	end 

	def update
		note = Note.find(params[:id])
		if note 
			note.update(note_params)
			render json: note
		else
			render json: { error: "Note not found" }, status: :not_found
		end 
	end 

	def destroy 
		note = Note.find(params[:id])
		note.destroy
		head :no_content
	end

	private 

	def note_params
		params.permit(:text)
	end 
end
