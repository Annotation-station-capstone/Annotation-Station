package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollectionsRepository extends JpaRepository<Collection, Long> {

    Collection findByTitle(String title);

    Collection findFirstByTitle(String title);

    Collection findAllCollections(String title);
}
