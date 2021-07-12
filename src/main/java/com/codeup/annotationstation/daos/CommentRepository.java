package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.Models.Comment;
import com.codeup.annotationstation.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findAllByUserAndIdAndCollection (User user, long id, Collection collection);
    List<Comment> findCommentsByCollectionId (long id);
    List<Comment> findCommentByCollectionAndUserAndId(Collection collection, User user, long id);
    List<Comment> findByCollection_Id(long id);
}
