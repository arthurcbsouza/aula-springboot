package com.aulas.maven.aulaservice.controllers.internal;

import java.io.Serializable;

public class ResponseEnvelope<T> implements Serializable {

    private T object;

    private boolean success;

    private String message;

    public T getObject() {
        return object;
    }

    public ResponseEnvelope<T> setObject(T object) {
        this.object = object;
        return this;
    }

    public boolean isSuccess() {
        return success;
    }

    public ResponseEnvelope<T> setSuccess(boolean success) {
        this.success = success;
        return this;
    }

    public String getMessage() {
        return message;
    }

    public ResponseEnvelope<T> setMessage(String message) {
        this.message = message;
        return this;
    }
}
