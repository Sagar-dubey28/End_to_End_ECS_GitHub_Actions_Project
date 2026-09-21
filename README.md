# React + AWS ECS Fargate DevOps Project

This project implements the supplied DevOps task: React web app, Docker/Nginx, Terraform, ECR, ECS Fargate, GitHub Actions, CloudWatch and SNS.

## Architecture

Developer -> GitHub -> GitHub Actions -> Docker Build/Test -> ECR -> ECS Fargate -> CloudWatch -> SNS

The React app is a static frontend, so Nginx serves the built files. A reverse-proxy configuration is not necessary unless a backend/API is added later.

## Repository branches

- `main` - production deployment branch
- `develop` - development branch

## Local run

```bash
npm install
npm run dev
```

## Docker run

```bash
docker build -t ecs-react-app .
docker run --rm -p 8080:80 ecs-react-app
```

Open http://localhost:8080

## Terraform

```bash
cd terraform
terraform init
terraform fmt -recursive
terraform validate
terraform plan -var-file="terraform.tfvars"
terraform apply -var-file="terraform.tfvars"
```

After apply, Terraform prints the ECS service name, cluster name, ECR URL and load balancer URL.

## Important

Before applying, update `terraform/terraform.tfvars` and the GitHub repository values in the OIDC configuration.

The first SNS notification requires an email subscription confirmation.

GitHub Actions uses AWS OIDC, so long-lived AWS access keys are not required.
