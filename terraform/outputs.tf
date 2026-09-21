output "ecr_repository_url" {
  value = aws_ecr_repository.app.repository_url
}

output "ecs_cluster_name" {
  value = aws_ecs_cluster.this.name
}

output "ecs_service_name" {
  value = aws_ecs_service.app.name
}

output "alb_dns_name" {
  value = aws_lb.this.dns_name
}

output "application_url" {
  value = "http://${aws_lb.this.dns_name}"
}

output "github_actions_role_arn" {
  value = aws_iam_role.github_actions.arn
}

output "sns_topic_arn" {
  value = aws_sns_topic.alerts.arn
}
