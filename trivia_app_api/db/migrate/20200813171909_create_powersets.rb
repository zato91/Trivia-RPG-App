class CreatePowersets < ActiveRecord::Migration[6.0]
  def change
    create_table :powersets do |t|
      t.integer :character_id
      t.integer :power_id

      t.timestamps
    end
  end
end
