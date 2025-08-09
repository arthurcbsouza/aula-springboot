package com.aulas.maven.aulaservice.services;

import com.aulas.maven.aulaservice.controllers.internal.ResponseEnvelope;
import com.aulas.maven.aulaservice.dto.BasicClass;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@Service
public class BasicService {

    private Map<String, BasicClass> basicClasses = new HashMap<>();

    public BasicService() {
        this.basicClasses.put("Arthur", new BasicClass(1, "Arthur", 47));
        this.basicClasses.put("Space", new BasicClass(1, "Leandro", 24));
        this.basicClasses.put("Thiago", new BasicClass(1, "Thiago", 29));
    }

    public String getUserMessage() {
        return "Ola !!!";
    }

    public String getUserMessage(String userName) {
        return String.format("Ola %s seu corno!!!", userName);
    }

    public ResponseEntity<ResponseEnvelope<BasicClass>> getUserObject(@RequestParam String userName) {
        return this.basicClasses.containsKey(userName) ? ResponseEntity.status(HttpStatus.OK).body(new ResponseEnvelope<BasicClass>()
                                                                                                                .setObject(this.basicClasses.get(userName))
                                                                                                                .setSuccess(true)) :
                                                         ResponseEntity.status(HttpStatus.OK)
                                                                       .body(new ResponseEnvelope<BasicClass>()
                                                                                    .setSuccess(false)
                                                                                    .setMessage("usuario não existe"));
    }

}
