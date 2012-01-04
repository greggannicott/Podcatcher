class AddMediaTypeToEpisodes < ActiveRecord::Migration
  def change
    add_column :episodes, :media_type, :string
  end
end
