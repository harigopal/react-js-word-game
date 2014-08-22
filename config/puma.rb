#!/usr/bin/env puma

# Start puma:
# RAILS_ENV=production bundle exec puma -C ./config/puma.rb

# Stop puma:
# RAILS_ENV=production bundle exec pumactl -F config/puma.rb stop

# Graceful restart:
# RAILS_ENV=production bundle exec pumactl -F config/puma.rb phased-restart

# Hard restart:
# RAILS_ENV=production bundle exec pumactl -F config/puma.rb restart

# Check status:
# RAILS_ENV=production bundle exec pumactl -F config/puma.rb status

application_path = File.absolute_path(File.dirname(__FILE__) + '/..')
rails_environment = ENV['RAILS_ENV'] || 'production'

directory application_path
environment rails_environment
daemonize true
pidfile "#{application_path}/tmp/pids/puma-#{rails_environment}.pid"
state_path "#{application_path}/tmp/pids/puma-#{rails_environment}.state"
stdout_redirect "#{application_path}/log/puma-#{rails_environment}.stdout.log", "#{application_path}/log/puma-#{rails_environment}.stderr.log"
bind "unix://#{application_path}/tmp/sockets/#{rails_environment}.socket"
workers    1
threads    1, 6
