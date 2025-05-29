package com.myv.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 웹 콘피그
 */
//@Configuration
//public class WebConfig implements WebMvcConfigurer {
//
//    @Override
//    public void addViewControllers(ViewControllerRegistry registry) {
//        registry.addViewController("/{spring:[a-zA-Z0-9\\-]+}")
//                .setViewName("forward:/");
//        registry.addViewController("/**")
//                .setViewName("forward:/");
//    }
//}