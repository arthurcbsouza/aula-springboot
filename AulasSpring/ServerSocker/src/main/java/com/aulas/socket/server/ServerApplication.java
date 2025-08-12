package com.aulas.socket.server;

import com.aulas.socket.shared.ClientInfo;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ServerApplication {
    public static void main(String[] args) throws IOException {
        final List<Socket> clientConnections = new ArrayList<>();
        final Map<Socket, ObjectInputStream> streams = new HashMap<>();
        try (ServerSocket serverSocket = new ServerSocket(10000)) {
            System.out.println("Server listening on port 10000");
            // Thread separada
            new Thread(() -> {
                try {
                    while (true) {
                        Socket newClient = serverSocket.accept();
                        synchronized (clientConnections) {
                            clientConnections.add(newClient);
                            streams.put(newClient, new ObjectInputStream(newClient.getInputStream()));
                        }
                    }
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }).start();

            while (true) {
                Socket[] clients = null;
                synchronized (clientConnections) {
                    clients = clientConnections.toArray(new Socket[clientConnections.size()]);
                }
                for (Socket client : clients) {
                    BufferedReader incoming = new BufferedReader(new InputStreamReader(client.getInputStream(), StandardCharsets.UTF_8));
                    BufferedWriter output = new BufferedWriter(new OutputStreamWriter(client.getOutputStream(), StandardCharsets.UTF_8));
                    String incomingData = incoming.readLine();
                    System.out.println(String.format("Data received [%s]", incomingData));
                    output.write(String.format("Data received on server [%s]\n", incomingData));
                    output.flush();
                    ClientInfo receivedClient = (ClientInfo) streams.get(client).readObject();
                    System.out.println(String.format("Object received [%s]", receivedClient.toString()));
                    Thread.sleep(500);
                }
            }
        } catch ( Exception err ) {
            err.printStackTrace();
        }
    }

}
