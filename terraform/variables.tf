variable "aws_region" {
  type        = string
  description = "AWS region"
  default     = "ap-south-1"
}

variable "project_name" {
  type        = string
  default     = "ecs-react-devops"
}

variable "environment" {
  type        = string
  default     = "dev"
}

variable "vpc_cidr" {
  type    = string
  default = "10.20.0.0/16"
}

variable "container_port" {
  type    = number
  default = 80
}

variable "desired_count" {
  type    = number
  default = 2
}

variable "cpu" {
  type    = number
  default = 256
}

variable "memory" {
  type    = number
  default = 512
}

variable "alert_email" {
  type        = string
  description = "Email address for SNS CPU alarm confirmation"
}

variable "github_org" {
  type        = string
  description = "GitHub organization or username"
}

variable "github_repo" {
  type        = string
  description = "GitHub repository name"
}

variable "app_environment" {
  type        = map(string)
  default = {
    APP_ENV = "production"
  }
}
