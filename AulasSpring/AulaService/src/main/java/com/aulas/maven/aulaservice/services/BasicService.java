package com.aulas.maven.aulaservice.services;

import org.springframework.stereotype.Service;

@Service
public class BasicService {

    public String getUserMessage() {
        return "Ola !!!";
    }

    public String getUserMessage(String userName) {
        return String.format("Ola %s seu corno!!!", userName);
    }

}
