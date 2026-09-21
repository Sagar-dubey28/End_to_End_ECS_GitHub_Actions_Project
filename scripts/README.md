Optional helper commands:

Build:
docker build -t ecs-react-devops .

Run:
docker run --rm -p 8080:80 ecs-react-devops

Check:
curl http://localhost:8080/health
