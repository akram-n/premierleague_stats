FROM openjdk:23-jdk-slim

WORKDIR /app

COPY backend/target/premier-zone.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
