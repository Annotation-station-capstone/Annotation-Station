package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
