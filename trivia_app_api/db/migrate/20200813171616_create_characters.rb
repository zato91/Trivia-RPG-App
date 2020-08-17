class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :bio 
      t.text :tagline
      t.string :img_url
      t.integer :max_hp
      t.integer :armor
      t.integer :energy

      t.timestamps
    end
  end
end
