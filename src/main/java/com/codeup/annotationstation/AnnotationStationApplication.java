package com.codeup.annotationstation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class AnnotationStationApplication {

    public static void main(String[] args) {
        SpringApplication.run(AnnotationStationApplication.class, args);
    }

}
