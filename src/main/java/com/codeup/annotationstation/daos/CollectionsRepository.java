package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Collection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CollectionsRepository extends JpaRepository<Collection, Long> {

    Collection findByTitle(String title);

    Collection findFirstByTitle(String title);
}
