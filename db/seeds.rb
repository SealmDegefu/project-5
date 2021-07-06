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


Blog.create!([
	{
	src: "https://asset.bloomnation.com/c_fit,f_auto,h_416,q_auto,w_624/v1/vendor/5663/blog/z/o/zola_fall2016_shoot_25.jpg",
	text: "9 Simple Tips For A Stress-Free Wedding Registry",
	label: "Wedding Registry",
	href: "https://www.stylemepretty.com/registry-guide"
	},
	{
	src: "https://cdn0.weddingwire.com/articles/images/3/7/7/1/img_11773/t30_wedding-registry-checklist.jpg",
	text: "The Best Gifts To Register for At Every Price Point",
	label: "Wedding Registry",
	href: "https://www.stylemepretty.com/2019/08/22/the-best-gifts-to-register-for-at-every-price-point/"
	},
	{
	src: "https://www.wildblueweddings.com/wp-content/uploads/2018/10/how-to-create-a-wedding-registry.jpg",
	text: "The Best Registry Items to Satisfy Every Passion",
	label: "Wedding Registry",
	href: "https://www.stylemepretty.com/2019/05/06/the-best-registry-items-to-satisfy-every-passion/"
	},
	{
	src: "https://southernbride.co.nz/wp-content/uploads/2016/10/wedding-gift-registry-wording-1024x683.jpg",
	text: "10 Registry Items Worth The Splurge",
	label: "Wedding Registry",
	href: "https://www.stylemepretty.com/2019/05/08/registry-items-worth-the-price-tag/"
	},
	{
	src: "https://itgirlweddings.com/wp-content/uploads/2016/07/2-edited.jpg",
	text: "10 Registry Items Past Brides Still Use ALL Of The Time",
	label: "Wedding Registry",
	href: "https://www.stylemepretty.com/2019/06/11/10-registry-items-past-brides-still-use-all-of-the-time/"
	},
	{
	src: "https://cdn11.bigcommerce.com/s-icqnutfkey/product_images/uploaded_images/sardegna-landscape-2-.jpg",
	text: "Your Foolproof Guide To Buying Wedding Gifts",
	label: "Wedding Registry",
	href: "https://www.stylemepretty.com/2019/06/28/read-this-your-foolproof-guide-to-buying-gifts-for-weddings/"
	},
	{
	src: "https://www.brides.com/thmb/FnjXC3_ebtwXD5QY0KLI1AoHj-g=/1440x1440/smart/filters:no_upscale()/goldbridesmaidsq-4a5ba38876ee4a72b8b4ca18458f0b64.jpg",
	text: "12 New Rules for Dressing Your Bridesmaids",
	label: "Bridesmaids",
	href: "https://www.marthastewart.com/7906617/how-to-choose-bridesmaid-dresses-your-wedding-party-will-love"
	},
	{
	src: "https://3niahvs89xr1aqdao2verc4w-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/lovely-bride-x-dessy-harlow-hannah-1000x667.jpg",
	text: "Don't Overpay for Bridesmaid Dresses!",
	label: "Bridesmaids",
	href: "https://www.kennedyblue.com/blogs/weddings/dont-overpay-for-your-bridesmaid-dresses"
	},
	{
	src: "https://wendysbridalcincinnati.com/wp-content/uploads/elementor/thumbs/cornflower-blue-bridesmaid-dresses-oov26e3c1bcici6h1ybhi97fisj9dt7msziykr9s26.jpg",
	text: "Stunning Sequin Bridesmaid Dresses for Every Season",
	label: "Bridesmaids",
	href: "https://www.kennedyblue.com/blogs/weddings/sequin-bridesmaid-dresses"
	},
	{
	src: "https://www.essensedesigns.com/blog/wp-content/uploads/2019/08/d82c7609-1024x510.jpg.pagespeed.ce.FsQGSX0kN2.jpg",
	text: "How to Make Sure Your Bridesmaids Don't Hate Their Dresses",
	label: "Bridesmaids",
	href: "https://www.theknot.com/content/tips-for-choosing-the-right-bridesmaid-dresses"
	},
	{
	src: "https://cdn0.weddingwire.com/emp/fotos/1/6/5/5/6/0/r10_2x_cfp-andrews-wedding-273_51_1065561-1561750435.jpg",
	text: "Bridesmaid Dress Shopping Tips: Every Etiquette Rule You Need to Know",
	label: "Bridesmaids",
	href: "https://www.brides.com/story/bridesmaid-dress-shopping-etiquette-101"
	},
	{
	src: "https://cdn.marriottnetwork.com/uploads/sites/23/2020/12/the-phoenician-scottsdale-resort-wedding-venue-east-lawn-480x780.jpg",
	text: "How to Choose the Perfect Wedding Venue",
	label: "Venue",
	href: "https://blog.wedsites.com/choose-perfect-wedding-venue/"
	},
	{
	src: "https://www.newjerseybride.com/wp-content/uploads/Screen-Shot-2018-12-12-at-3.31.04-PM.png",
	text: "12 Things to Consider Before Choosing a Wedding Venue",
	label: "Venue",
	href: "https://www.marthastewart.com/7953961/5-elements-consider-when-choosing-wedding-location"
	},
	{
	src: "https://eliaskordelakos.com/wp-content/uploads/sites/14206/2017/11/Grand-Resort-Lagonissi-3-1.jpg",
	text: "Stop Making These 7 Mistakes when choosing a wedding venue",
	label: "Venue",
	href: "https://www.7centerpieces.com/planning/choosing-wedding-venues/"
	},
	{
	src: "https://media.cntraveler.com/photos/56e0811762c2faba1dda7045/1:1/w_1536,h_1536,c_limit/peabody-opera-house-wedding-cr-mnc-photography.jpg",
	text: "The Wedding Venue Checklist & Guide Every Couple Needs",
	label: "Venue",
	href: "https://www.weddingwire.com/wedding-ideas/wedding-venue-guide"
	},

])


