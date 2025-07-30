package com.aulas.maven.aulaservice.controllers;

import com.aulas.maven.aulaservice.services.BasicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @CrossOrigin("http://localhost:4200/")
@RequestMapping("/basic")
public class BasicController {

    BasicService basicService;

    @Autowired
    public BasicController(BasicService service) {
        this.basicService = service;
    }

    @GetMapping("/message")
    public String getUserMessage() {
        return this.basicService.getUserMessage();
    }

    @GetMapping("/personalized")
    public String getUserMessage(String userName) {
        return this.basicService.getUserMessage(userName);
    }
}
