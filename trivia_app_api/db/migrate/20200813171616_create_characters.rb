class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :max_hp
      t.integer :armor
      t.text :img_url

      t.timestamps
    end
  end
end
