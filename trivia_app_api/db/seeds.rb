# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Character.destroy_all
Power.destroy_all
Powerset.destroy_all

Character.create(name:"Axel",bio:"Fighting Style: Balanced",tagline:"Come back when you've learned how to fight!",max_hp:15,armor:10,energy:2, img_url:"./images/Chars/Axel_Avatar.png")
Character.create(name:"Blaze",bio:"Fighting Style: Finesse",tagline:"I hope I didn't hurt your ego too badly... Oops!",max_hp:10,armor:10,energy:3, img_url: "./images/Chars/Blaze_Avatar.png")
Character.create(name:"Diva",bio:"Fighting Style: Ability Based",tagline:"You haven't felt my full power.",max_hp:10,armor:5,energy:4, img_url: "./images/Chars/Diva_Avatar.png")
Character.create(name:"Floyd",bio:"Fighting Style: Brute Force",tagline:"Can't you see how pathetic your attacks are!",max_hp:20,armor:15,energy:1, img_url: "./images/Chars/Floyd_Avatar.png")

Power.create(name:"Dragon Wing", effect:1)
Power.create(name:"Shoryuken", effect:2)
Power.create(name:"Kikou Shou", effect:1)
Power.create(name:"Embukyaku", effect:2)
Power.create(name:"Energy Ball", effect:2)
Power.create(name:"Electric Dash", effect:1)
Power.create(name:"Thunder Slam", effect:1)
Power.create(name:"Knuckle Bomb", effect:2)
Power.create(name:"Blind Rage", effect:3)

Powerset.create(character_id: 1,power_id:1)
Powerset.create(character_id: 1,power_id:2)
Powerset.create(character_id: 2,power_id:3)
Powerset.create(character_id: 2,power_id:4)
Powerset.create(character_id: 3,power_id:5)
Powerset.create(character_id: 3,power_id:6)
Powerset.create(character_id: 4,power_id:7)
Powerset.create(character_id: 4,power_id:8)
Powerset.create(character_id: 4,power_id:9)