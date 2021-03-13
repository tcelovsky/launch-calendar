namespace :db do
    task :dcms do
      desc 'Drop, Create, Migrate and Seed the Database'
      Rake::Task["db:drop"].invoke
      Rake::Task["db:create"].invoke
      Rake::Task["db:migrate"].invoke
      Rake::Task["db:seed"].invoke
      puts 'Database dropped, created, migrated and seeded.'
    end
  end