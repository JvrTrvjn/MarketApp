package com.market.repository;

import com.market.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriasRepository extends JpaRepository<Categoria,Integer> {
}
