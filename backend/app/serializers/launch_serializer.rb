class LaunchSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :rocket, :launch_site, :mission
end
