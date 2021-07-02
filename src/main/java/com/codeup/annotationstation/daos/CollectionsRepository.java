package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CollectionsRepository extends JpaRepository<Collection, Long> {

    Collection findByTitle(String title); // select * from collection where title= ?

    Collection findFirstByTitle(String title);
    Collection findAllByTitle(String title);

    List<Collection> findByTitleLike(String title);
    List<Collection> findCollectionByTitleLike(String title);

    List<Collection> findByUserAndId(User user, long id);
    List<Collection> findByUser(User user);
    
    List<Collection> findFirst10ByTitleOrderByTitleDesc(String title);
    List<Collection> findBySectionsAndTitle(String title);

//    Collection findAllCollections(String title);
}
