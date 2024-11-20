## Simple Book Application CI/CD Pipeline

### Overview

The goal of this project is to automate the deployment of a **Simple Book application** built using **Node.js** and **React** to the **Amazon Web Services (AWS)** Cloud. This project utilizes a combination of automation tools to streamline the deployment process, which includes:

- **Provisioning infrastructure**
- **Configuring the environment**
- **Containerizing the application**
- **Setting up a Continuous Integration/Continuous Deployment (CI/CD) pipeline**

Key components of this project include:

- **Terraform**: Used for automating the creation of an Amazon Elastic Compute Cloud (EC2) instance.
- **Ansible**: Configures the server, including setting up Docker and Docker Compose.
- **Docker**: Containerizes the Node.js and React applications separately.
- **GitHub Actions**: Implements a CI/CD pipeline that triggers automatic deployments on every push to the repository.

The outcome of this project results in a fully automated deployment of the book application to a cloud instance. This minimizes manual configuration, significantly improving the DevOps cycle and enabling developers to seamlessly integrate code changes, which is essential for enterprise-level Agile Development.

### Prerequisites

To run this code, ensure you have the following:

- An AWS account
- Docker Hub Account
- GitHub account for CI/CD integration

### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/KevinRooso/bookautomation.git
   cd bookautomation

2. **Update Terraform file**

Replace AMI Id in main.tf file with AMI ID from your AWS EC2.
   
2. **Get Public IP from Instance**

After provisioning your EC2 instance, you need to manually input its public IP address into several files before every push if you restart the instance:
The .env file in the book-frontend folder (React folder).
The GitHub Actions workflow file.
The Ansible hosts.ini file.
This step is crucial for ensuring that your application can connect to the correct server instance.

3. **Set Up GitHub Secrets**

You need to define several secrets in your GitHub repository settings to securely store sensitive information required by your CI/CD pipeline. Navigate to your repository's settings and under "Secrets and variables," add the following secrets:
- **AWS_ACCESS_KEY_ID**: Your AWS access key ID.
- **AWS_SECRET_ACCESS_KEY**: Your AWS secret access key.
- **DOCKER_USERNAME**: Your Docker Hub username.
- **DOCKER_PASSWORD**: Your Docker Hub password.
- **SSH_PRIVATE_KEY**: Your SSH private key for accessing the EC2 instance.

### CI/CD Pipeline
The CI/CD pipeline is configured using GitHub Actions. It automatically builds and deploys your application whenever changes are pushed to the main branch.

### Usage
Once everything is set up and running, you can access your Simple Book application via the public IP of your EC2 instance.
  
