namespace :db do
    task :dcms do
      desc 'Drop, Create and Migrate the Database'
      Rake::Task["db:drop"].invoke
      Rake::Task["db:create"].invoke
      Rake::Task["db:migrate"].invoke
      puts 'Database dropped, created and migrated.'
    end
  end