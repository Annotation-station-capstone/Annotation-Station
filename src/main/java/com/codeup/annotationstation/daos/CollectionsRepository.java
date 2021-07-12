package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.Models.Section;
import com.codeup.annotationstation.Models.User;
import org.hibernate.annotations.CollectionId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CollectionsRepository extends JpaRepository<Collection, Long> {

    Collection findByTitle(String title); // select * from collection where title= ?

    Collection findFirstById(long id);
    Collection findFirstByTitle(String title);
    List<Collection> findAllByTitle(String title);
//    List<Collection> findAllByIs_privateFalse();

    List<Collection> findByTitleLike(String title);
    List<Collection> findCollectionByTitleLike(String title);

    List<Collection> findByUserAndId(User user, long id);
    List<Collection> findByUser(User user);


    
    List<Collection> findFirst10ByTitleOrderByTitleDesc(String title);

    Collection getById(long id);




//    Collection findAllCollections(String title);
}
