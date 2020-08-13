class CreatePowers < ActiveRecord::Migration[6.0]
  def change
    create_table :powers do |t|
      t.string :name
      t.integer :mana_cost

      t.timestamps
    end
  end
end
