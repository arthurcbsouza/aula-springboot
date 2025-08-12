package com.aulas.socket.shared;

import java.io.Serializable;

public class ClientInfo implements Serializable {
    String name;
    int age;
    public ClientInfo(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String toString() {
        return "ClientInfo{" + "name='" + name + '\'' + ", age=" + age + '}';
    }
}