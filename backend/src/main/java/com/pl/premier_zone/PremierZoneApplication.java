package com.pl.premier_zone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class PremierZoneApplication {

	public static void main(String[] args) {
		SpringApplication.run(PremierZoneApplication.class, args);
	}

@Bean
public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            // Update this with the URL of your frontend on Vercel
            registry.addMapping("/**")
                    .allowedOrigins("https://premierleague-stats.vercel.app")  // Frontend URL
                    .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed HTTP methods
                    .allowedHeaders("*")  // Allow all headers
                    .allowCredentials(true);  // If you need to send credentials like cookies
        }
    };
}
}