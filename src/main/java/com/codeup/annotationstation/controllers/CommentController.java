package com.codeup.annotationstation.controllers;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.Models.Comment;
import com.codeup.annotationstation.Models.User;
import com.codeup.annotationstation.daos.CollectionsRepository;
import com.codeup.annotationstation.daos.CommentRepository;
import com.codeup.annotationstation.daos.UsersRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class CommentController {
    private CommentRepository commentDao;
    private UsersRepository userDao;
    private CollectionsRepository collectionDao;

    public CommentController(CommentRepository commentDao, UsersRepository userDao, CollectionsRepository collectionDao) {
        this.commentDao = commentDao;
        this.userDao = userDao;
        this.collectionDao = collectionDao;
    }

    //show all comments on a collection
    @GetMapping("/comment/all")
    public String showAllComments(Model model) {
        //find user of the comment
        model.addAttribute("allComments", commentDao.findAll());
        return "redirect:/comments/all";
    }

    @GetMapping("/comment/{id}/edit")
    public String getCommentToEdit(@PathVariable long id, Model model) {
        model.addAttribute("postToEdit", commentDao.getById(id));
        return "redirect:/comment/{id}/edit";
    }

    @PostMapping("/comment/{id}/edit")
    public String saveEditedComment(@PathVariable long id, @ModelAttribute Comment comment) {
        Comment commentToBeEdited = commentDao.getById(id);
        commentDao.save(commentToBeEdited);
        return "redirect:/collection";
    }

    @GetMapping("comment/{id}/delete")
    public String destroyComment(@PathVariable long id) {
        commentDao.deleteById(id);
        return "redirect:/collection";
    }

//    @GetMapping("/comment/create")
//    public String showCreateForm(Model model) {
//        model.addAttribute("comment", new Comment());
//        return "collectionsSingle";
//    }

    @PostMapping("/comment/add")
    public String createComment(@ModelAttribute Comment newComment,
                                @RequestParam long collectionId) {
//
//        @ModelAttribute Comment newComment,




//        newComment.setComment("Hellooooo to the world!");
//        newComment.setComment("Overriding whatever was in the input!");

        System.out.println("collectionId = " + collectionId);
//
//        //TODO: let's grab the user through the principal and assign it to the user object
//
        Collection currentCollection = collectionDao.getById(collectionId);
//
        User currentUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        System.out.println("user = " + currentUser.getUsername());
        System.out.println("currentCollection.getTitle() = " + currentCollection.getTitle());
//
//
        System.out.println("currentUser = " + currentUser);
        newComment.setUser(currentUser);
        newComment.setCollection(currentCollection);
//
        List<Comment> comments = new ArrayList<>();
//
        comments.add(newComment);
//
        currentCollection.setComments(comments);
//
//        collectionDao.save(currentCollection);

        commentDao.save(newComment);
        return "redirect:/collections/single";
    }
}







