//package com.codeup.annotationstation.service;
//
//import com.codeup.annotationstation.Models.*;
//import com.codeup.annotationstation.daos.CollectionsRepository;
//import com.codeup.annotationstation.daos.CommentRepository;
//import com.codeup.annotationstation.daos.UsersRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class CommentService {
//
//    private CollectionsRepository collectionsDao;
//
//    @Autowired
//    CollectionsRepository collectionsRepository;
//
//    @Autowired
//    CommentRepository commentRepository;
//
//    @Autowired
//    UsersRepository usersRepository;
//
//
//    public void addComment(Comment comment, long userId) {
//
//        User setUser = usersRepository.getById(userId);
//        Comment newComment = commentRepository.save(comment);
//
//
//    }
//}