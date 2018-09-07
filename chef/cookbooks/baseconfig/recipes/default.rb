# Make sure the Apt package lists are up to date, so we're downloading versions that exist.
execute 'apt_update' do
  command 'apt-get update'
end
execute 'apt_upgrade' do
  command 'apt-get upgrade -y'
end

# Base configuration recipe in Chef.
package "wget"
package "ntp"

cookbook_file "ntp.conf" do
  path "/etc/ntp.conf"
end
execute 'ntp_restart' do
  command 'service ntp restart'
end

package "mysql-server"

execute "echo \"CREATE USER IF NOT EXISTS 'notes'@'%' IDENTIFIED by 'password';\" | sudo mysql -u root"
execute "echo \"GRANT ALL PRIVILEGES ON *.* to 'notes'@'%';\" | sudo mysql -u root"