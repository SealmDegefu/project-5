class BlogsController < ApplicationController

	def index
		blogs = Blog.where(label: params[:label]) 
		render json: blogs
	end

	def show
		blog = Blog.find_by(id: params[:id])
		if blog
			render json: blog
		else
			render json: { error: "Blog not found" }, status: :not_found
		end 
	end 

end
