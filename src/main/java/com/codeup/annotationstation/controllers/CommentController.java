package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.Models.Comment;
import com.codeup.annotationstation.Models.User;
import com.codeup.annotationstation.daos.CommentRepository;
import com.codeup.annotationstation.daos.UsersRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Optional;

@Controller
public class CommentController {
    private CommentRepository commentDao;
    private UsersRepository userDao;

    public CommentController(CommentRepository commentDao, UsersRepository userDao) {
        this.commentDao = commentDao;
        this.userDao=userDao;
    }
//show all comments on a collection
    @GetMapping("/comment/all")
    public String showAllComments(Model model){
        //find user of the comment
        model.addAttribute("allComments", commentDao.findAll());
        return "redirect:/comments/all";
    }

    @GetMapping("/comment/{id}/edit")
    public String getCommentToEdit(@PathVariable long id,Model model){
        model.addAttribute("postToEdit", commentDao.getById(id));
        return "redirect/comment/{id}/edit";
    }

    @PostMapping("/comment/{id}/edit")
    public String saveEditedComment(@PathVariable long id, @ModelAttribute Comment comment){
        Comment commentToBeEdited = commentDao.getById(id);
        commentDao.save(commentToBeEdited);
        return "redirect/collection";
    }

    @GetMapping("comment/{id}/delete")
    public String destroyComment(@PathVariable long id){
        commentDao.deleteById(id);
        return "redirect/collection";
    }






}
