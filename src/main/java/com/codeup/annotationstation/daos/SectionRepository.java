package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.Models.Comment;
import com.codeup.annotationstation.Models.Section;
import com.codeup.annotationstation.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SectionRepository extends JpaRepository<Section, Long> {

    Section findByTitle();
//
//    Section findFirstByTitle(String title);

//    List<Section> findAllByUserAndIdAndCollection (User user, long id, Collection collection);
}
