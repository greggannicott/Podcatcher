class CreateEpisodes < ActiveRecord::Migration
  def change
    create_table :episodes do |t|
      t.integer :user_id
      t.float :current_time
      t.string :url

      t.timestamps
    end
  end
end
