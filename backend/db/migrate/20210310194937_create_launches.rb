class CreateLaunches < ActiveRecord::Migration[6.0]
  def change
    create_table :launches do |t|
      t.string :date
      t.string :time
      t.string :rocket
      t.string :site
      t.string :mission

      t.timestamps
    end
  end
end
