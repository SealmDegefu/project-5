# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Checklist.destroy_all
ChecklistItem.destroy_all


checklist1 = Checklist.create!(image_url: "https://media.xogrp.com/images/7743652e-c191-4210-beed-a3bca03a699f", name: "Wedding Registry", description: "This list will go through everything you need to checkoff for the wedding registry")
checklist2 = Checklist.create!(image_url: "https://www.refinery29.com/images/10461924.jpg?crop=40%3A21", name: "Bridesmaids", description: "This list will go through everything you need to checkoff for the bridesmaids")
checklist3 = Checklist.create!(image_url: "https://rrgrove.com/wp-content/uploads/2020/12/grove-interior-reception-slide.jpg",name: "Venue", description: "This list will go through everything you need to checkoff to find your dream venue")


ChecklistItem.create!(list: "1- Write down together as a couple what you want to include in your wedding registry", checklist_id: checklist1.id)
ChecklistItem.create!(list: "2- Take inventory, make a list of what you have, as well as what you still need and want.", checklist_id: checklist1.id)
ChecklistItem.create!(list: "3- Register as early as you can to give your guests an ample amount of time. You can use any site you want but our famous one is Zola.", checklist_id: checklist1.id)

ChecklistItem.create!(list: "1- First thing is first, decide the theme of your wedding so you can decide what the color of the dress will be", checklist_id: checklist2.id)
ChecklistItem.create!(list: "2- Decide what your bridesmaids dress will be and confirm with the bridesmaids it will work for everyone ", checklist_id: checklist2.id)
ChecklistItem.create!(list: "3- Make sure the bridesmaids will get sized and fitted early on", checklist_id: checklist2.id)

ChecklistItem.create!(list: "1- First thing is first, decide location for the wedding", checklist_id: checklist3.id)
ChecklistItem.create!(list: "2- Decide the amount of guests you want to invite from both side of the family", checklist_id: checklist3.id)
ChecklistItem.create!(list: "3- Look at venue options in the locations you want and start putting in requests", checklist_id: checklist3.id)




