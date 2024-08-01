package com.market.service;

import com.market.model.Cliente;
import com.market.repository.ClientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientesServiceImpl implements ClientesService {

    @Autowired
    ClientesRepository clientesRepository;

    @Override
    public Cliente autenticarCliente(String usuario, String password) {
        return clientesRepository.findByUsuarioAndPassword(usuario, password);
    }

    @Override
    public boolean registrarCliente(Cliente cliente) {
        if (clientesRepository.findById(cliente.getUsuario()) != null) {
            return false;
        }
        clientesRepository.save(cliente);
        return true;
    }
}
