package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UsersRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    boolean existsByEmail(String email);
    List<User> findAllByIs_admin(boolean is_admin);
}
