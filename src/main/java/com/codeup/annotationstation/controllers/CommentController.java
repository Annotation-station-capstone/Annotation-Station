package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.daos.CommentRepository;
import org.springframework.stereotype.Controller;

@Controller
public class CommentController {
    private CommentRepository commentDao;

    public CommentController(CommentRepository commentDao) {
        this.commentDao = commentDao;
    }

    @GetMaping("/comment")
    public String
}
