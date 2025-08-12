package com.aulas.socket.client;

import com.aulas.socket.shared.ClientInfo;

import java.io.*;
import java.net.Socket;
import java.nio.charset.StandardCharsets;

public class ClientApplication {

    public static void main(String[] args) throws IOException {
        try (Socket socket = new Socket("127.0.0.1", 10000)) {
            BufferedWriter output = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream(), StandardCharsets.UTF_8));
            BufferedReader incoming = new BufferedReader(new InputStreamReader(socket.getInputStream(), StandardCharsets.UTF_8));
            ObjectOutputStream outputStream = new ObjectOutputStream(socket.getOutputStream());
            outputStream.flush();
            while (true) {
                System.out.println("Sending ping message");
                output.write(String.format("Hello world from %s!!!\n", args[0]));
                output.flush();
                System.out.println(String.format("Data received from server [%s]", incoming.readLine()));
                System.out.println("Sending");
                outputStream.writeObject(new ClientInfo(args[0], 47));
                outputStream.flush();
                System.out.println("Sent");
                Thread.sleep(1000);
            }
        } catch ( Exception err ) {
            err.printStackTrace();
        }
    }
}
