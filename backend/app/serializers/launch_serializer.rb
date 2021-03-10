class LaunchSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :rocket, :site, :mission
end
