package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<User, Long> {

}
