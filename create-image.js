{
    "builders": [
        {
            "type": "amazon-ebs",
            "region": "us-east-1",
            "source_ami": "ami-02a599eb01e3b3c5b",
            "instance_type": "t3.large",
            "communicator": "ssh",
            "ssh_username": "ubuntu",
            "ami_name": "Name_AMI_{{timestamp}}"
        }
    ],
    "provisioners": [
        {
            "type": "shell",
            "inline": ["sudo apt update",
            "sudo apt install -y apache2",
            "sudo rm -r /var/www/html/*",
            "sudo echo 'ServerName example.com' >> /etc/apache2/sites-available/000-default.conf"]
        },
        {
            "type": "file",
            "source": "index.html",
            "destination": "/var/www/html/index.html"
        }
    ]
}