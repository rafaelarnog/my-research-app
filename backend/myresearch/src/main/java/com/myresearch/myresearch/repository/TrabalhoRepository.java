package com.myresearch.myresearch.repository;

import com.myresearch.myresearch.entity.Trabalho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrabalhoRepository extends JpaRepository<Trabalho, Integer> {
}
