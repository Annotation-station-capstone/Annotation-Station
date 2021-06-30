package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CollectionsRepository extends JpaRepository<Collection, Long> {

    Collection findByTitle(String title);

    Collection findFirstByTitle(String title);
    Collection findAllByTitle(String title);

    List<Collection> findByTitleLike(String title);
    List<Collection> findCollectionByTitleLike(String title);
    
    List<Collection> findCollectionByS

//    Collection findAllCollections(String title);
}
