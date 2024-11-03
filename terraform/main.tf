terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws"{
    region = "eu-west-1"  # Ireland Instance
}

resource "aws_security_group" "allow_nodereact_ports" {
  name = "allow_nodereact_ports"
  description = "Allows Node and React Ports"

   ingress {
    from_port   = 4000
    to_port     = 4000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Allow Node.js app traffic
  }

  ingress {
    from_port   = 5173
    to_port     = 5173
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Allow React Vite app traffic
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"  # Allow all outbound traffic
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "dockerappserver" {
    ami = "ami-00385a401487aefa4" # Amazon Linux AMI from AWS
    instance_type = "t2.micro" # Free tier instance type
    key_name = "My key" # key pair for aws connection
    security_groups = [aws_security_group.allow_nodereact_ports.name] # Controls inbound outbound traffic
}