package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Comment;
import com.codeup.annotationstation.Models.Section;
import com.codeup.annotationstation.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface SectionRepository extends JpaRepository<Section, Long> {

    @Query(value = "select * from sections s where s.title= :title AND s.collection_id=:collection",nativeQuery = true)
    List<Section> findAllByTitleAndByCollection(String title, long collection);
    List<Section> findSectionsByCollectionId (long id);
    Section findAllById (long id);
    Section findFirstById (long id);
    Section findByTitle (String string);
    Section getAllByCollectionId (long id);
    List<Section> findAllByTitle(String Title);



//
//    Section findFirstByTitle(String title);

//    List<Section> findAllByUserAndIdAndCollection (User user, long id, Collection collection);
}
